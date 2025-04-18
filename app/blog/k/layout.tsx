'use client';

import React, { Suspense, unstable_ViewTransition as ViewTransition } from 'react';

import { MdOutlineIosShare } from 'react-icons/md';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between space-x-4'>
        <div>
          <h1 className='text-lg font-semibold'>On developer experience</h1>
          <div className='mt-2 flex items-center space-x-2'>
            <Suspense fallback={<div className='h-8 w-8 rounded-full bg-primary/20' />}>
              <span className='text-sm text-primary/70'>11/08/2023</span>
            </Suspense>
            <Suspense fallback={<div className='h-8 w-8 rounded-full bg-primary/20' />}>
              <span className='text-sm text-primary/70'> 200 views</span>
            </Suspense>
          </div>
        </div>
        <button className='h-fit rounded-full bg-primary/10 p-2'>
          <MdOutlineIosShare className='text-primary' />
        </button>
      </div>

      <ViewTransition>
        <main className='blog list flex flex-col'>
          {/* <Toc /> */}
          <ViewTransition name={`name`}> </ViewTransition>
          {/* <Link className='fixed left-[20%] top-[20%] z-50' href='/blog'>
            Home
          </Link> */}
          <article className='flex flex-col gap-2'>{children}</article>
        </main>
      </ViewTransition>
    </div>
  );
};

export default layout;
