interface IPost {
  id: string;
  slug: string;
  heroImage: IContentfulImage;
  title: string;
  publishDate: string;
  description?: string;
  topicsCollection: ItopicsCollection;
  contentHtml: string;
  linkedFrom: IContentfulLinked;
}

interface IPostCollection {
  items: IPost[];
  total: number;
}
