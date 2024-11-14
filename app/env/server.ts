import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    BASE_URL: z.string().url(),
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
});
