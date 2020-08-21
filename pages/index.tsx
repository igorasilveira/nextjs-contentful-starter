/* eslint-disable react/jsx-one-expression-per-line, max-len */
import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout/layout';
import CardGroup from '../components/card-group/card-group';
import Cta from '../components/cta/cta';

import { getPostsForHome } from '../lib/posts';

export default function Home({
  posts,
}: {
  posts: IPost[]
}) {
  return (
    <Layout>
      <Head>
        <title>
          Home |
          {` ${siteTitle}`}
        </title>
        <meta
          name="description"
          content="All things Web Dev"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className="flex flex-col justify-center">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
          Welcome to DailyDev.io <span role="img" aria-label="waving hand">👋</span>,
        </h1>
        <h2 className="text-lg lg:text-3xl my-4 lg:my-6 leading-tight">
          The goal of this site is to create content to aid you through your web development journey with tools, tips and experiences.
        </h2>
        <p className="text-sm lg:text-2xl text-gray-700 italic font-semibold">
          Start with our most recents posts <a href="#posts" className="text-primary underline">bellow</a>, or browse our <Link href="/topics"><a className="text-secondary underline">topics</a></Link>.
        </p>
      </section>
      <section className="my-4 lg:my-6" id="posts">
        <CardGroup posts={posts} />
        {
          posts.length >= 5
          && (
            <div className="flex flex-row justify-center my-4 md:my-8">
              <Cta icon="ellipsis" />
            </div>
          )
        }
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getPostsForHome();

  return {
    props: { posts },
  };
};
