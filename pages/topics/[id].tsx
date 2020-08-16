/* eslint-disable react/no-danger */
import { GetStaticProps, GetStaticPaths } from 'next';

import Head from 'next/head';
import Layout from '../../components/layout/layout';

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
      </Head>
      <section>
        <TopicComponent topic={topic} />
        {topic.description && (
          <p className="mt-4 text-xl text-rich-black leading-normal rounded-lg">
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
