interface IContentfulImage {
  url: string;
  title?: string;
  description?: string;
}

interface IContentfulData {
  blogPostCollection?: IPostCollection;
  topicCollection?: ItopicsCollection;
}

interface IContentfulItems {
  linkedFrom?: IContentfulLinked;
}

interface IContentfulLinked {
  blogPostCollection?: IPostCollection;
  topicsCollection?: ItopicsCollection;
}
