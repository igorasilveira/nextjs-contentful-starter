import fs from 'fs';
import path from 'path';

import { getTopicData } from './topics';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): IPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".json" from file name to get id
    const id = fileName.replace(/\.json$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data as IPost,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.json$/, ''),
    },
  }));
}

export async function getPostData(id: string): Promise<IPost> {
  const fullPath = path.join(postsDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const post: IPost = JSON.parse(fileContents);
  post.topics = post.rawTopics.map((topic) => getTopicData(topic));

  // Combine the data with the id and contentHtml
  return {
    id,
    ...post,
  };
}
