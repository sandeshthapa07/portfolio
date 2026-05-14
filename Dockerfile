# -------------------------
# Base image (use LTS, not Node 23)
# -------------------------
FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Enable corepack + stable pnpm
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# -------------------------
# Dependencies
# -------------------------
FROM base AS deps

COPY package.json pnpm-lock.yaml* yarn.lock* package-lock.json* .npmrc* ./

# 🚨 IMPORTANT FIXES:
# - disable husky
# - allow native builds (sharp, etc.)
ENV HUSKY=0
ENV PNPM_IGNORE_SCRIPTS=false

RUN pnpm install --frozen-lockfile

# -------------------------
# Builder
# -------------------------
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PRIVATE_STANDALONE=true
ENV HUSKY=0

RUN pnpm run build

# -------------------------
# Runner
# -------------------------
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy standalone output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]