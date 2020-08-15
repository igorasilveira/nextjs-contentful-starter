/* eslint-disable react/jsx-one-expression-per-line, max-len */
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';

import TopicGroup from '../components/topic-group/topic-group';

import { getSortedTopicsData } from '../lib/topics';

export default function Topics({
  topics,
}: {
  topics: ITopic[]
}) {
  return (
    <Layout>
      <Head>
        <title>
          Topics |
          {` ${siteTitle}`}
        </title>
      </Head>
      <section className="flex flex-col justify-center">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
          Explore by topic
        </h1>
        <div className="my-2">
          <TopicGroup isLink topics={topics} />
        </div>
        <h3 className="text-lg md:text-3xl mb-4 lg:mb-6 leading-tight text-gray-700">
          More topics are on the move! 🏗
        </h3>
        <img className="py-4 md:py-8 h-full w-full lg:h-2/3 lg:w-2/3 xl:h-1/2 xl:w-1/2 mx-auto" src="/images/topics-building.svg" alt="Topics building" />
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const topics = getSortedTopicsData();

  return {
    props: { topics },
  };
};
