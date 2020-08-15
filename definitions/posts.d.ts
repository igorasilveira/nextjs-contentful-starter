interface IPost {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt?: string;
  rawTopics?: string[];
  topics?: ITopic[];
  contentHtml: string;
}
