'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/app/lib/utils';

const Toc = () => {
  const [headings, setHeadings] = useState<{ text: string; href: string; percentage: number }[]>([]);

  useEffect(() => {
    const totalHeight = document.documentElement.scrollHeight;

    const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((heading) => {
      const bottom = heading.getBoundingClientRect().bottom + window.scrollY;

      return {
        text: heading.textContent?.trim() ?? '',
        bottom,
        href: heading?.id,
      };
    });

    allHeadings.sort((a, b) => a.bottom - b.bottom);

    const allhading = [
      ...allHeadings.slice(0, allHeadings.length - 1).map((item, i) => ({
        text: item.text,
        href: item.href,

        percentage: ((allHeadings[i + 1].bottom - item.bottom) / totalHeight) * 100,
      })),
      {
        text: allHeadings[allHeadings.length - 1].text,
        percentage:
          ((allHeadings[allHeadings.length - 1].bottom - allHeadings[allHeadings.length - 2].bottom) / totalHeight) *
          100,
        href: allHeadings[allHeadings.length - 1].href,
      },
    ];

    setHeadings(allhading);
  }, []);

  return (
    <>
      <div className='fixed left-0 top-0 z-[9999] flex w-fit flex-col items-start justify-start gap-2 px-4 py-10'>
        <div role='menuitem' tabIndex={0} aria-label='Table of contents' className='flex flex-col gap-2'>
          {headings.map((h) => (
            <div key={h.text} className='flex cursor-pointer flex-col gap-2'>
              {Array.from({ length: h.percentage }).map((_, lineIndex) => (
                <LineOfTOC lineIndex={lineIndex} key={lineIndex + 1} h={h} href={h?.href} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='fixed inset-0 z-[9998] bg-black opacity-75'></div>
    </>
  );
};

export default Toc;

const LineOfTOC = ({
  lineIndex,
  h,
  href,
}: {
  lineIndex: number;
  href: string;
  h: { text: string; percentage: number };
}) => {
  const anchorHref = href ? `#${href}` : '#';
  return (
    <button key={lineIndex + 1} className='flex flex-col gap-2'>
      <span className={cn('relative h-1 origin-left rounded bg-foreground', lineIndex === 0 ? 'min-w-24' : 'min-w-16')}>
        {lineIndex === 0 && (
          <a href={anchorHref} className='absolute left-full top-1/2 w-fit -translate-y-1/2 whitespace-nowrap pl-2'>
            {h.text}
          </a>
        )}
      </span>
    </button>
  );
};
