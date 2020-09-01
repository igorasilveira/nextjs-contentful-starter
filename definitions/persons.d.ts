interface IPerson {
  title: string;
  name: string;
  shortBio: string;
  email: string;
  twitter?: string;
  facebook?: string;
  twitter?: string;
  linkedIn?: string;
  github?: string;
  image?: IContentfulImage;
}

interface IPersonsCollection {
  items: IPerson[];
  total?: number;
}
