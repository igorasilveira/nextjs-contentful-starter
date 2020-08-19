import { fetchAPI } from './contentful';

export async function getAuthorData(name: string): Promise<IPerson> {
  const personData: IContentfulData = await fetchAPI(
    `personCollection(preview: $preview, limit: 1, where: {
      name: "${name}"
    }) {
      items {
        title
        name
        shortBio
        email
        twitter
        github
        image {
          title
          description
          url
        }
        linkedIn
      }
    }`,
  );

  const person: IPerson = personData.personCollection.items.shift();

  return person;
}

export default function test() {
  return '';
}
