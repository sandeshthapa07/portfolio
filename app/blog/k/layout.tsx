'use client';

import Link from 'next/link';
import React, { unstable_ViewTransition as ViewTransition } from 'react';

import Toc from './Toc';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViewTransition>
      <div className='blog list flex flex-col gap-10'>
        {/* <Toc /> */}
        <ViewTransition name={`name`}> </ViewTransition>
        <Link href='/blog'>Home</Link>

        {children}
      </div>
    </ViewTransition>
  );
};

export default layout;
