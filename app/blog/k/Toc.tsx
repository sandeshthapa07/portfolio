'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, useMotionValue, useTransform } from 'motion/react';

const Toc = () => {
  const [headings, setHeadings] = useState<{ text: string; percentage: number }[]>([]);

  useEffect(() => {
    const totalHeight = document.documentElement.scrollHeight;

    const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((heading) => {
      const bottom = heading.getBoundingClientRect().bottom + window.scrollY;

      return {
        text: heading.textContent?.trim() ?? '',
        bottom,
      };
    });

    allHeadings.sort((a, b) => a.bottom - b.bottom);

    const allhading = [
      ...allHeadings.slice(0, allHeadings.length - 1).map((item, i) => ({
        text: item.text,
        percentage: ((allHeadings[i + 1].bottom - item.bottom) / totalHeight) * 100,
      })),
      {
        text: allHeadings[allHeadings.length - 1].text,
        percentage:
          ((allHeadings[allHeadings.length - 1].bottom - allHeadings[allHeadings.length - 2].bottom) / totalHeight) *
          100,
      },
    ];

    setHeadings(allhading);
  }, []);

  const mouseY = useMotionValue(Infinity);
  const ref = useRef<HTMLButtonElement>(null);
  let width = useTransform(mouseY, [0, 300], [40, 80]);
  console.log(mouseY);

  return (
    <motion.div
      role='menuitem'
      tabIndex={0}
      aria-label='Table of contents'
      onMouseOver={(e) => mouseY.set(e.pageY)}
      onMouseLeave={(e) => mouseY.set(Infinity)}
      className='fixed left-0 top-0 z-50 flex h-screen w-full flex-col items-start justify-start gap-2 overflow-y-scroll bg-white px-4 py-10'
    >
      {headings.map((h) => (
        <div key={h.text} className='flex cursor-pointer flex-col gap-2'>
          {Array.from({ length: h.percentage }).map((_, lineIndex) => (
            <motion.button
              ref={ref}
              style={{
                width,
              }}
              key={lineIndex + 1}
              className='flex flex-col gap-2'
            >
              {lineIndex === 0 ? (
                <span className='relative h-1 w-24 rounded bg-black'>
                  <span className='absolute left-full top-1/2 w-fit -translate-y-1/2 whitespace-nowrap pl-2 text-black'>
                    {h.text}
                  </span>{' '}
                </span>
              ) : (
                <span className='h-1 w-16 rounded bg-black' />
              )}
            </motion.button>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default Toc;
