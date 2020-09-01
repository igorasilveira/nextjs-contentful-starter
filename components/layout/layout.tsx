import { ReactNode } from 'react';

import Head from 'next/head';

import NavBar from '../navbar/navbar';

export const siteTitle = 'DailyDev.io';

export default function Layout({
  children,
}: {
  children: ReactNode[]
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="mx-0 mb-16 md:mb-0 md:ml-16 py-8 md:py-12 px-4 md:px-12 lg:px-20 xl:px-32 text-rich-black">
        {children}

        <p className="mt-16 mb-4 text-gray-400 text-sm">
          DailyDev.io &copy;
          {' '}
          {new Date().getFullYear()}
        </p>
      </main>
    </div>
  );
}
