/* eslint-disable react/no-danger */
import { GetStaticProps, GetStaticPaths } from 'next';

import Head from 'next/head';
import Layout from '../../components/layout/layout';
import Date from '../../components/date/date';

import TopicGroup from '../../components/topic-group/topic-group';

import postStyles from './post.module.css';

import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ post }: { post: IPost }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <TopicGroup topics={post.topicsCollection.items} isPill isLink />
        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold mb-2">{post.title}</h1>
        <div className="text-md md:text-lg text-gray-500 italic">
          <Date dateString={post.publishDate} />
        </div>
        <img className="w-full h-48 md:h-64 my-4 md:my-10 rounded-2lg object-cover shadow-lg" src={post.heroImage.url} alt={post.title} />
        <div
          className={postStyles.postBody}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostData(params.id as string);
  return {
    props: {
      post,
    },
  };
};
