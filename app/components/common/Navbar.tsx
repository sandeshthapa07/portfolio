'use client';

import { useTheme } from 'next-themes';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdMoon } from 'react-icons/io';
import { MdOutlineHome, MdOutlineWbSunny } from 'react-icons/md';

export function GooeyMenu() {
  const { theme, setTheme } = useTheme();

  const playSound = () => {
    const audio = new Audio('/audio/switch.mp3'); // Add sound file in public folder
    audio.play();
  };

  return (
    <>
      <div className='fixed bottom-0 right-0 z-20 h-[300px] w-12'>
        <nav
          className='menu w-fit'
          style={
            {
              filter: 'url(#gooey)',
              width: '100%',
              height: '100%',
              '--spring-easing':
                'linear(0, 0.88117 15.492%, 1.09261 23.232%, 1.10421 28.713%, 0.99031 49.585%,0.99995)',
            } as React.CSSProperties
          }
        >
          <input type='checkbox' className='peer hidden' name='menu' id='menu' />
          <label
            className='absolute bottom-10 right-10 z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-1000 ease-[var(--spring-easing)]'
            htmlFor='menu'
          >
            <GiHamburgerMenu className='text-primary-foreground-light-2 dark:text-primary-foreground-dark-1 h-5 w-5' />

            {/* <span className='h-5 w-5 text-primary-foreground-foreground'>home</span> */}
          </label>
          <button className='absolute bottom-10 right-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 ease-in peer-checked:translate-y-[-80px] peer-checked:duration-1000 peer-checked:ease-[var(--spring-easing)]'>
            {/* <GearIcon className='text-primary-foreground-light-2 dark:text-primary-foreground-dark-1 h-5 w-5' /> */}
            {/* <span>men2</span> */}

            <MdOutlineHome className='h-5 w-5 text-primary-foreground' />
          </button>
          <button
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
              playSound();
            }}
            className='absolute bottom-10 right-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 ease-in peer-checked:translate-y-[-162px] peer-checked:duration-1000 peer-checked:ease-[var(--spring-easing)]'
          >
            {/* <HeartIcon className='text-primary-foreground-light-2 dark:text-primary-foreground-dark-1 h-5 w-5' /> */}
            {/* <span>menu3</span> */}
            {theme === 'dark' ? (
              <IoMdMoon className='text-primary-foreground-light-2 dark:text-primary-foreground-dark-1 h-5 w-5' />
            ) : (
              <MdOutlineWbSunny className='text-primary-foreground-light-2 dark:text-primary-foreground-dark-1 h-5 w-5' />
            )}
          </button>
        </nav>
        <svg className='absolute hidden' width='0' height='0' xmlns='http://www.w3.org/2000/svg' version='1.1'>
          <defs>
            <filter id='gooey'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
              <feColorMatrix
                in='blur'
                mode='matrix'
                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10'
                result='gooey'
              />
              <feComposite in='SourceGraphic' in2='gooey' operator='atop' />
            </filter>
          </defs>
        </svg>
      </div>
      {/* <div className='fixed inset-0 z-10 h-full w-full bg-white opacity-50' /> */}
    </>
  );
}
