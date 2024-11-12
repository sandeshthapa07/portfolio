import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  flex flex-row  antialiased`}>
        <aside className="scrollable-area lg:w-60 xl:w-72 h-full bg-white text-black border-r border-gray-200 flex flex-col p-3  ">
          <div className="flex flex-row gap-1"></div>
          <Link href="/blog">Blog</Link>
          <Link href="/theme-changer">Theme Changer</Link>
        </aside>
        <main className="scrollable-area  flex-1">{children}</main>
      </body>
    </html>
  );
}
