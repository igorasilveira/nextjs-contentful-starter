interface IPost {
  id: string;
  slug: string;
  heroImage: ICloudinaryImage;
  images: ICloudinaryImage[];
  title: string;
  sys: IContentfulSys;
  publishedAt: string;
  description?: string;
  topicsCollection: ITopicsCollection;
  contentHtml: string;
  linkedFrom: IContentfulLinked;
  body: string;
  sys?: IContentfulSys;
}

interface IPostCollection {
  items: IPost[];
  total: number;
}
