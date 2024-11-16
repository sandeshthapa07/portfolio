import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-4'>
      <h3 className='text-3xl font-bold'>Back to where you </h3>
      <Link href='/' className='text-4xl font-black uppercase text-green-700 underline'>
        belong
      </Link>
    </div>
  );
};

export default NotFound;
