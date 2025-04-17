'use client';

import { useRef } from 'react';

import { useTheme } from 'next-themes';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdMoon } from 'react-icons/io';
import { MdOutlineHome, MdOutlineWbSunny } from 'react-icons/md';
import Link from 'next/link';

export function GooeyMenu() {
  const { theme, setTheme } = useTheme();

  const playSound = () => {
    const audio = new Audio('/audio/switch.mp3');
    audio.play();
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleThemeToggle = async () => {
    if (!document.startViewTransition || !buttonRef.current) {
      return;
    }

    playSound();

    const isDark = document.documentElement.classList.contains('dark');

    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(window.innerWidth, window.innerHeight);

    if (!isDark) {
      document.documentElement.classList.add('dark-pending');
    }

    const transition = document.startViewTransition(() => {
      setTheme(isDark ? 'light' : 'dark');
      document.documentElement.classList.toggle('dark');

      if (!isDark) {
        document.documentElement.classList.remove('dark-pending');
      }
    });

    transition.ready.then(() => {
      const animation = document.documentElement.animate(
        {
          clipPath:
            // ? [`circle(${endRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`]
            [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
        },
        {
          duration: 1000,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );

      return animation.finished;
    });
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
          <input
            type='checkbox'
            className='peer hidden'
            name='menu'
            onChange={() => {
              const audio = new Audio('/audio/water-drip.mp3');
              audio.preload = 'auto';
              audio.playbackRate = 0.8; // Double speed (1.0 is normal)
              audio.play().catch((e) => console.error('Audio play failed', e));
            }}
            id='menu'
          />
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

            <Link href='/'>
              {' '}
              <MdOutlineHome className='h-5 w-5 text-primary-foreground' />{' '}
            </Link>
          </button>
          <button
            onClick={handleThemeToggle}
            ref={buttonRef}
            className='absolute bottom-10 right-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 ease-in peer-checked:translate-y-[-162px] peer-checked:duration-1000 peer-checked:ease-[var(--spring-easing)]'
          >
            {/* <HeartIcon className='text-primary-foreground-light-2 dark:text-primary-foreground-dark-1 h-5 w-5' /> */}
            {/* <span>menu3</span> */}
            {theme === `light` ? (
              <MdOutlineWbSunny className='text-primary-foreground-light-2 h-5 w-5' />
            ) : (
              <IoMdMoon className='text-primary-foreground-light-2 text-primary-foreground-dark-1 h-5 w-5' />
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
