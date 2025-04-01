'use client';

import { useRef, useState } from 'react';

import * as motion from 'motion/react-client';

const Page = () => {
  const [mouseY, setMouseY] = useState<number | undefined>(0);
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    setMouseY(e.clientY);
  };
  const el = useRef<HTMLButtonElement>(null);

   return (
    <div
      onMouseMove={handleMouse}
      onMouseLeave={() => setMouseY(undefined)}
      className='flex w-fit cursor-pointer flex-col gap-1'
    >
      {Array.from({ length: 50 }).map((_, index) => (
        <motion.button
          ref={el}
          key={index + 1}
          whileHover={{ width: '200%' }}
          className='h-[5px] w-12 cursor-pointer bg-gray-200'
        />
      ))}
    </div>
  );
};

export default Page;

