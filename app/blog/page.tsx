'use client';

import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

const Page = () => {
  return (
    <ViewTransition>
      <div className='blog list flex'>
        <ViewTransition name={`name`}>
          <h1 className=''>sandesh thapa </h1>
        </ViewTransition>
      </div>
      <Link href='/blog/k'>Home df</Link>
    </ViewTransition>
  );
};

export default Page;
