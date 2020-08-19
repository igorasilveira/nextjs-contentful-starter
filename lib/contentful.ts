const API_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;

export async function fetchAPI(query) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
    },
    body: JSON.stringify({
      query: `query ($preview: Boolean){
        ${query}
      }`,
      variables: {
        preview: process.env.PREVIEW === 'true',
      },
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function test() {
  return '';
}
