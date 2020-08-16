import { fetchAPI } from './contentful';

export async function getPostsForHome() {
  const data: IContentfulData = await fetchAPI(
    `query ($preview: Boolean){
      blogPostCollection(preview: $preview, limit: 5, order: [
        publishDate_DESC
      ]) {
        items {
          title,
          slug,
          heroImage {
            url,
            description
          },
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
      },
    }`,
    {},
  );

  const posts: IPost[] = data.blogPostCollection.items;

  return posts;
}

export async function getAllPostIds() {
  const data: IContentfulData = await fetchAPI(
    `query ($preview: Boolean){
        blogPostCollection(preview: $preview) {
          items {
            slug
        },
      }
    }`,
    {},
  );

  const posts: IPost[] = data.blogPostCollection.items;

  return posts.map(({ slug }) => ({
    params: {
      id: slug,
    },
  }));
}

export async function getPostData(slug: string) {
  const data: IContentfulData = await fetchAPI(
    `query ($preview: Boolean){
        blogPostCollection(preview: $preview, where: {
          slug: "${slug}"
        }) {
          items {
            title
            slug
            publishDate
            heroImage{
              description
              url
            },
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
      }
    }`,
    {},
  );

  const post: IPost = data.blogPostCollection.items.shift();

  return post;
}
