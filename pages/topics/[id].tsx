/* eslint-disable react/no-danger */
import { GetStaticProps, GetStaticPaths } from 'next';

import Head from 'next/head';

import Layout, { siteTitle } from '../../components/layout/layout';
import TopicComponent from '../../components/topic/topic';

import { getAllTopicsIds, getTopicData } from '../../lib/topics';
import CardGroup from '../../components/card-group/card-group';

export default function Topic({
  topic,
  posts,
}: {
  topic: ITopic
  posts: IPost[]
}) {
  return (
    <Layout>
      <Head>
        <title>
          {topic.title}
          {' '}
          | Topic
        </title>
        <meta
          name="description"
          content={`Articles on ${topic.title}`}
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
      <section>
        <TopicComponent topic={topic} />
        {topic.description && (
          <p className="mt-8 text-xl text-rich-black leading-normal rounded-md font-normal p-4 bg-gray-200">
            {topic.description}
          </p>
        )}
      </section>
      <section>
        <div className="my-4">
          <CardGroup posts={posts} />
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllTopicsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { topic, posts } = await getTopicData(params.id as string);
  return {
    props: {
      topic,
      posts,
    },
  };
};
