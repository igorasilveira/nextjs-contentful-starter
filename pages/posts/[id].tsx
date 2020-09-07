/* eslint-disable react/no-danger */
import { GetStaticProps, GetStaticPaths } from 'next';

import Head from 'next/head';

import { useEffect, useState } from 'react';
import Layout, { siteTitle } from '../../components/layout/layout';
import Date from '../../components/date/date';
import TopicGroup from '../../components/topic-group/topic-group';

import postStyles from './post.module.css';

import { getAllPostIds, getPostData } from '../../lib/posts';
import { getScrollPercent } from '../../helpers/document';
import ProgressBar from '../../components/progress-bar/progress-bar';
import ReadTime from '../../components/read-time/read-time';

export default function Post({ post }: { post: IPost }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollPercentage(getScrollPercent());
    });
  });

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={post.description}
        />
        <meta name="og:description" property="og:description" content={post.description} />
        <meta
          property="og:image"
          content={post.heroImage.url}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script src="/js/prism.js" async />
      </Head>
      <article>
        <div className={`
          md:pb-4 mb-16 md:mb-0 z-10
          fixed bottom-0 md:top-0 inset-x-0
        `}
        >
          <ProgressBar value={scrollPercentage} />
        </div>
        <TopicGroup topics={post.topicsCollection.items} isPill isLink />
        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold mb-2">{post.title}</h1>
        <div className="text-md md:text-lg text-gray-600">
          <Date dateString={post.sys.publishedAt} />
          {' | '}
          <ReadTime post={post} />
        </div>
        <div className="my-4 md:my-10">
          <img className="w-full h-48 md:h-56 lg:h-64 rounded-2lg object-cover shadow-lg" src={post.heroImage.secure_url} alt={post.heroImage.context?.custom.alt || post.title} />
          <p className="text-center mt-3 italic text-gray-500">{post.heroImage.context.custom.caption}</p>
        </div>
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
