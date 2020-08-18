interface IPost {
  id: string;
  slug: string;
  heroImage: IContentfulImage;
  title: string;
  publishDate: string;
  description?: string;
  topicsCollection: ITopicsCollection;
  contentHtml: string;
  linkedFrom: IContentfulLinked;
  body: string;
}

interface IPostCollection {
  items: IPost[];
  total: number;
}
