interface ITopic {
  id: string;
  title: string;
  description: string;
  color: string;
  postCount: number;
  slug: string;
  contentHtml: string;
  linkedFrom: IContentfulLinked;
  sys?: IContentfulSys;
}

interface ITopicsCollection {
  items: ITopic[];
  total: number;
}

interface ITopicData {
  topic: ITopic;
  posts: IPost[];
}
