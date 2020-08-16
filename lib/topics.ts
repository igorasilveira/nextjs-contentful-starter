import { fetchAPI } from './contentful';

export async function getAllTopicsIds() {
  const data: IContentfulData = await fetchAPI(
    `query($preview: Boolean) {
      topicCollection(preview: $preview) {
        items {
          slug
        },
      }
    }`,
    {},
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
    `query ($preview: Boolean, $slug: String) {
      topicCollection(preview: $preview, limit: 1, where: {slug: $slug}) {
        items {
          slug
          title
          color
          linkedFrom {
            blogPostCollection(limit: 5) {
              items {
                title
                body
                slug
                publishDate
                heroImage {
                  url
                  description
                }
                topicsCollection {
                  items {
                    title,
                    color,
                    slug
                  }
                }
              }
              total
            }
          }
        }
      }
    }`,
    {},
  );

  const topic: ITopic = topicsData.topicCollection.items.shift();
  const posts: IPost[] = topic.linkedFrom.blogPostCollection.items;

  posts.sort((a, b) => {
    if (a.publishDate < b.publishDate) {
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
    `query($preview: Boolean) {
      topicCollection(preview: $preview) {
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
      }
    }`,
    {},
  );

  const topics: ITopic[] = data.topicCollection.items;

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
