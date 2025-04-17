'use client';

import { useEffect, useRef, useState } from 'react';

import { MotionValue, motion, useMotionValue, useTransform } from 'motion/react';

import { cn } from '@/app/lib/utils';

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

  const mouseY = useMotionValue(0);

  return (
    <div className='fixed left-0 top-0 z-50 flex h-screen w-full flex-col items-start justify-start gap-2 overflow-y-scroll bg-white px-4 py-10'>
      <div
        role='menuitem'
        tabIndex={0}
        aria-label='Table of contents'
        onMouseMove={(e) => {
          mouseY.set(e.pageY);
        }}
        onMouseLeave={() => mouseY.set(0)}
        className='flex flex-col gap-2 bg-red-400'
      >
        {headings.map((h) => (
          <div key={h.text} className='flex cursor-pointer flex-col gap-2'>
            {Array.from({ length: h.percentage }).map((_, lineIndex) => (
              <LineOfTOC lineIndex={lineIndex} key={lineIndex + 1} h={h} mouseY={mouseY} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toc;

const LineOfTOC = ({
  mouseY,
  lineIndex,
  h,
}: {
  mouseY: MotionValue<number>;
  lineIndex: number;
  h: { text: string; percentage: number };
}) => {
  let ref = useRef<HTMLSpanElement>(null);
  const distance = useTransform(mouseY, (val) => {
    const bounds = ref?.current?.getBoundingClientRect() ?? { y: 0, height: 0 };

    return Math.abs(bounds?.y - bounds?.height / 2 - val);
  });

  const width = useTransform(mouseY, [0, 800, 1600], [128, 150, 128]);
  return (
    <motion.button key={lineIndex + 1} className='flex flex-col gap-2'>
      <motion.span
        ref={ref}
        className={cn('relative h-1 origin-left rounded bg-black', lineIndex === 0 ? 'min-w-24' : 'min-w-16')}
      >
        {lineIndex === 0 && (
          <span className='absolute left-full top-1/2 w-fit -translate-y-1/2 whitespace-nowrap pl-2 text-black'>
            {h.text}
          </span>
        )}
      </motion.span>
    </motion.button>
  );
};
