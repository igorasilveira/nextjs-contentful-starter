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
        <meta
          name="description"
          content="Future site of everything web dev"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script src="https://kit.fontawesome.com/a8c1cca14c.js" crossOrigin="anonymous" />
        <script src="/js/prism.js" async />
      </Head>
      <NavBar />
      <main className="mx-0 mb-16 md:mb-0 md:ml-16 py-8 md:py-12 px-4 md:px-16 xl:px-48 text-rich-black">
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
