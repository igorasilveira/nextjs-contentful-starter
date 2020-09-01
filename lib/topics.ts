import { fetchAPI } from './contentful';
import { getPostBody } from './posts';

export async function getAllTopicsIds() {
  const data: IContentfulData = await fetchAPI(
    `topicCollection(preview: $preview) {
      items {
        slug
      },
    }`,
  );

  const ids: ITopic[] = data.topicCollection.items;

  return ids.map((topic) => ({
    params: {
      id: topic.slug,
    },
  }));
}

export async function getTopicData(slug: string): Promise<ITopicData> {
  const topicsData: IContentfulData = await fetchAPI(
    `topicCollection(preview: $preview, limit: 1, where: {
        slug: "${slug}"
      }) {
      items {
        slug
        title
        color
        description
        linkedFrom {
          blogPostCollection(limit: 5) {
            items {
              title
              body
              slug
              description
              sys  {
                publishedAt
              }
              images
              topicsCollection {
                items {
                  title
                  color
                  slug
                }
              }
            }
            total
          }
        }
      }
    }`,
  );

  const topic: ITopic = topicsData.topicCollection.items.shift();
  const posts: IPost[] = topic.linkedFrom.blogPostCollection.items;
  await posts.forEach(async (post) => {
    post.heroImage = post.images.shift();
    post.contentHtml = await getPostBody(post);
  });

  posts.sort((a, b) => {
    if (a.sys.publishedAt < b.sys.publishedAt) {
      return 1;
    }
    return -1;
  });

  return {
    topic,
    posts,
  };
}

export async function getAllTopics() {
  const data: IContentfulData = await fetchAPI(
    `topicCollection(preview: $preview) {
      items {
        slug
        title
        color
        linkedFrom {
          blogPostCollection {
            total
          }
        }
      },
    }`,
  );

  const topics: ITopic[] = data.topicCollection.items
    .filter((topic) => topic.linkedFrom.blogPostCollection.total > 0);

  return topics;
}

export async function getTopicsForSitemap(): Promise<ITopic[]> {
  const data: IContentfulData = await fetchAPI(
    `topicCollection(preview: $preview) {
        items {
          slug
          sys {
            publishedAt
          }
      },
    }`,
  );

  const topics: ITopic[] = data.topicCollection.items
    .filter((topic) => topic.linkedFrom.blogPostCollection.total > 0);

  return topics;
}

export async function getSortedTopicsData(): Promise<ITopic[]> {
  const topics = await getAllTopics();

  return topics.sort((a, b) => {
    if (a.linkedFrom.blogPostCollection.total < b.linkedFrom.blogPostCollection.total) {
      return 1;
    }
    return -1;
  });
}
