import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';

import { getPostsForSitemap } from '../../lib/posts';
import { getTopicsForSitemap } from '../../lib/topics';

async function addPostData(smStream: SitemapStream) {
  const posts = await getPostsForSitemap();
  posts.forEach((post) => {
    smStream.write({
      url: `/posts/${post.slug}`,
      lastmod: post.sys.publishedAt,
    });
  });
}

async function addTopicData(smStream: SitemapStream) {
  const topics: ITopic[] = await getTopicsForSitemap();
  topics.forEach((topic) => {
    smStream.write({
      url: `/topics/${topic.slug}`,
      lastmod: topic.sys.publishedAt,
    });
  });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const smStream = new SitemapStream({
    hostname: (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`)
      || 'http://localhost:3000',
  });

  smStream.write({
    url: '/',
  });
  smStream.write({
    url: '/topics',
  });
  smStream.write({
    url: '/about',
  });

  await addPostData(smStream);
  await addTopicData(smStream);

  smStream.end();
  const sitemap = await streamToPromise(smStream).then((sm) => sm.toString());

  res.setHeader('Content-Type', 'text/xml');
  return res.send(sitemap);
};
