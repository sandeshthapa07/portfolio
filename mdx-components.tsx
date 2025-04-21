import Link from 'next/link';

import type { MDXComponents } from 'mdx/types';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { cn } from './app/lib/utils';

type AnchorProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

export const components: MDXComponents = {
  // ImageCarousel: ({ imageUrls }: ImageCarouselProps) => {
  //   return <ImageCarousel imageUrls={imageUrls} />;
  // },
  // ImageShell: ({ imageUrl }: ImageShellProps) => {
  //   return <ImageShell imageUrl={imageUrl} />;
  // },
  // VideoViewer: ({ videoSrc }: VideoViewerProps) => {
  //   return <VideoViewer videoSrc={videoSrc} />;
  // },
  h2: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => {
    if (id?.includes('footnote-label')) {
      return null;
    }
    return <h2 id={children?.toString().toLowerCase().replace(/\s+/g, '-')}>{children}</h2>;
  },
  h3: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => {
    if (id?.includes('footnote-label')) {
      return null;
    }
    return <h3 id={children?.toString().toLowerCase().replace(/\s+/g, '-')}>{children}</h3>;
  },
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        'prose prose-neutral dark:prose-invert text-[15px] leading-7 [&:not(:first-child)]:mt-6',
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('prose prose-neutral dark:prose-invert ml-2 mt-2 list-disc text-[15px]', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('ml-2 mt-2 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => {
    return <li className={cn('ml-2 mt-2 list-item', className)} {...props} />;
  },
  a: ({ href, children, ...props }: AnchorProps) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' {...props}>
        {children}
      </a>
    );
  },
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className={cn('border-gray-4 mt-6 border-l-2 pl-6 italic text-muted', className)} {...props} />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function CustomMDX(props: any) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components ?? {}) }} />;
}
