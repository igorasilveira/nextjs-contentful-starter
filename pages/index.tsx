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
      </Head>
      <section className="flex flex-col justify-center">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
          Welcome to DailyDev.io,
        </h1>
        <h3 className="text-lg lg:text-3xl my-4 lg:my-6 leading-tight text-gray-700">
          The goal of this site is to create content to aid you through your web development journey with tools, tips and experiences.
        </h3>
        <p className="text-md lg:text-2xl font-medium">
          Start with our most recents posts <a href="#posts" className="text-primary underline">bellow</a>, or browse our <Link href="/topics"><a className="text-secondary underline">topics</a></Link>.
        </p>
      </section>
      <section className="py-8" id="posts">
        <CardGroup posts={posts} />
        <div className="flex flex-row justify-center my-4 md:my-8">
          <Cta icon="ellipsis" />
        </div>
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
