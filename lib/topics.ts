import fs from 'fs';
import path from 'path';

const topicsDirectory = path.join(process.cwd(), 'topics');

export function getAllTopicsIds() {
  const fileNames = fs.readdirSync(topicsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.json$/, ''),
    },
  }));
}

export function getTopicData(id: string): ITopic {
  const fullPath = path.join(topicsDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const topicData = JSON.parse(fileContents);

  // Combine the data with the id and contentHtml
  return {
    slug: id.replace(/\.json$/, ''),
    id: id.replace(/\.json$/, ''),
    ...topicData,
  };
}

export function getAllTopics() {
  const fileNames = fs.readdirSync(topicsDirectory);

  return fileNames.map((fileName) => getTopicData(fileName.replace(/\.json$/, '')));
}

export function getSortedTopicsData(): ITopic[] {
  const topics: ITopic[] = getAllTopics();
  // Sort posts by date
  return topics.sort((a, b) => {
    if (a.postCount < b.postCount) {
      return 1;
    }
    return -1;
  });
}
