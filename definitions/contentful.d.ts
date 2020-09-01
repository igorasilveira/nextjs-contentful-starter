interface IContentfulImage {
  url: string;
  title?: string;
  description?: string;
}

interface IContentfulData {
  blogPostCollection?: IPostCollection;
  topicCollection?: ITopicsCollection;
  personCollection?: IPersonsCollection;
}

interface IContentfulItems {
  linkedFrom?: IContentfulLinked;
}

interface IContentfulLinked {
  blogPostCollection?: IPostCollection;
  topicsCollection?: ITopicsCollection;
}

interface IContentfulSys {
  publishedAt: string;
}
