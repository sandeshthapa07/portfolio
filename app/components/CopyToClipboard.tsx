'use client';

import React from 'react';

export default function CopyToClipboard({ code }: Readonly<{ code: string }>) {
  const [copied, setCopied] = React.useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch (error) {
      console.error('Error copying to clipboard', error);
    } finally {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  };

  return (
    <button
      className='absolute left-[90%] top-3 z-30 rounded bg-card p-1 active:scale-90 sm:left-[94%]'
      onClick={copyToClipboard}
    >
      {!copied ? (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 256 256'>
          <path d='M216,40V168H168V88H88V40Z' opacity='0.2'></path>
          <path d='M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z'></path>
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M4 12 9 17L20 6' />
        </svg>
      )}
    </button>
  );
}
