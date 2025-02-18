import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from 'next-themes';

import { GooeyMenu } from './components/common/Navbar';
import './globals.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sandesh Thapa',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='light' suppressHydrationWarning>
      <body className={`${inter.className} group relative flex flex-col items-center justify-center antialiased`}>
        <ThemeProvider enableSystem>
          {/* {' '}
          <aside className='scrollable-area flex h-full flex-col border-r border-gray-200 p-3 text-black lg:w-60 xl:w-72'>
            <div className='flex flex-row gap-1'></div>
            <Link href='/blog'>Blog</Link>
            <Link href='/theme-changer'>Theme Changer</Link> */}

          {/* </aside> */}
          <main className='scrollable-area m-10 flex w-full max-w-2xl flex-1 flex-col'>
            {/* <ThemeChanger /> */}
            {children}
          </main>

          <GooeyMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
