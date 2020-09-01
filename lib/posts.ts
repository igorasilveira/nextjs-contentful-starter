import remark from 'remark';
import html from 'remark-html';

import { fetchAPI } from './contentful';

export async function getPostBody(post: IPost) {
  const processedContent = await remark()
    .use(html)
    .process(post.body);
  const contentHtml = processedContent.toString();

  return contentHtml;
}

export async function getPostsForHome() {
  const data: IContentfulData = await fetchAPI(
    `blogPostCollection(preview: $preview, limit: 5, order: [
      sys_publishedAt_DESC
    ]) {
      items {
        title
        body
        slug
        images
        description
        sys { 
          publishedAt
        }
        topicsCollection {
          items {
            title
            slug
            color
          }
        }
      }
    }`,
  );

  const posts: IPost[] = data.blogPostCollection.items;
  await posts.forEach(async (post) => {
    post.heroImage = post.images.shift();
    post.contentHtml = await getPostBody(post);
  });

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
          sys { 
            publishedAt
          }
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
          sys { 
            publishedAt
          }
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

  post.contentHtml = await getPostBody(post);

  return post;
}
