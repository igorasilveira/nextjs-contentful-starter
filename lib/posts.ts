import remark from 'remark';
import html from 'remark-html';

import { fetchAPI } from './contentful';

export async function getPostsForHome() {
  const data: IContentfulData = await fetchAPI(
    `blogPostCollection(preview: $preview, limit: 5, order: [
      publishDate_DESC
    ]) {
      items {
        title,
        slug,
        images
        description,
        publishDate,
        topicsCollection {
          items {
            title,
            slug,
            color
          }
        }
      }
    }`,
  );

  const posts: IPost[] = data.blogPostCollection.items;
  posts.forEach((post) => { post.heroImage = post.images.shift(); });
  return posts;
}

export async function getAllPostIds() {
  const data: IContentfulData = await fetchAPI(
    `blogPostCollection(preview: $preview) {
        items {
          slug
      },
    }`,
  );

  const posts: IPost[] = data.blogPostCollection.items;

  return posts.map(({ slug }) => ({
    params: {
      id: slug,
    },
  }));
}

export async function getPostsForSitemap(): Promise<IPost[]> {
  const data: IContentfulData = await fetchAPI(
    `blogPostCollection(preview: $preview) {
        items {
          slug
          publishDate
      },
    }`,
  );

  const posts: IPost[] = data.blogPostCollection.items;

  return posts;
}

export async function getPostData(slug: string) {
  const data: IContentfulData = await fetchAPI(
    `blogPostCollection(preview: $preview, where: {
        slug: "${slug}"
      }) {
        items {
          title
          slug
          publishDate
          images
          body,
          author {
            name
            image {
              url
            }
          },
          topicsCollection {
            items {
              title
              slug
              color
            },
          }
      },
    }`,
  );

  const post: IPost = data.blogPostCollection.items.shift();
  post.heroImage = post.images.shift();

  const processedContent = await remark()
    .use(html)
    .process(post.body);
  const contentHtml = processedContent.toString();

  post.contentHtml = contentHtml;

  return post;
}
