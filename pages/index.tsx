/* eslint-disable react/jsx-one-expression-per-line, max-len */
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout/layout';
import CardGroup from '../components/card-group/card-group';
import Cta from '../components/cta/cta';

export const posts: IPost[] = [
  {
    id: '0',
    title: 'A larger size larger larger post title',
    image: 'https://picsum.photos/500/300',
    date: '1994-09-23',
    excerpt: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis placerat suscipit suscipit. Phasellus maximus velit id purus tempus laoreet. Aenean elementum convallis auctor. Nulla facilisi. Etiam quis lacinia erat, ut rhoncus sem. Morbi risus dolor, laoreet eget libero ac, porta congue erat. In malesuada ut nunc quis pellentesque. Quisque sit amet metus sed nulla egestas tincidunt non nec nisi.',
    rawTopics: [
      'Correy',
      'Mariann',
      'Mathilda',
    ],
    contentHtml: '',
  },
  {
    id: '1',
    title: 'A post title',
    image: 'https://picsum.photos/500/300',
    date: '1994-09-23',
    excerpt: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis placerat suscipit suscipit. Phasellus maximus velit id purus tempus laoreet. Aenean elementum convallis auctor. Nulla facilisi. Etiam quis lacinia erat, ut rhoncus sem. Morbi risus dolor, laoreet eget libero ac, porta congue erat. In malesuada ut nunc quis pellentesque. Quisque sit amet metus sed nulla egestas tincidunt non nec nisi.',
    rawTopics: [
      'Correy',
      'Mariann',
      'Mathilda',
    ],
    contentHtml: '',
  },
  {
    id: '3',
    title: 'A post title',
    image: 'https://picsum.photos/500/300',
    date: '1994-09-23',
    excerpt: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis placerat suscipit suscipit. Phasellus maximus velit id purus tempus laoreet. Aenean elementum convallis auctor. Nulla facilisi. Etiam quis lacinia erat, ut rhoncus sem. Morbi risus dolor, laoreet eget libero ac, porta congue erat. In malesuada ut nunc quis pellentesque. Quisque sit amet metus sed nulla egestas tincidunt non nec nisi.',
    rawTopics: [
      'Correy',
      'Mariann',
      'Mathilda',
    ],
    contentHtml: '',
  },
  {
    id: '4',
    title: 'A post title',
    image: 'https://picsum.photos/500/300',
    date: '1994-09-23',
    excerpt: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis placerat suscipit suscipit. Phasellus maximus velit id purus tempus laoreet. Aenean elementum convallis auctor. Nulla facilisi. Etiam quis lacinia erat, ut rhoncus sem. Morbi risus dolor, laoreet eget libero ac, porta congue erat. In malesuada ut nunc quis pellentesque. Quisque sit amet metus sed nulla egestas tincidunt non nec nisi.',
    rawTopics: [
      'Correy',
      'Mariann',
      'Mathilda',
    ],
    contentHtml: '',
  },
  {
    id: '5',
    title: 'A post title',
    image: 'https://picsum.photos/500/300',
    date: '1994-09-23',
    excerpt: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis placerat suscipit suscipit. Phasellus maximus velit id purus tempus laoreet. Aenean elementum convallis auctor. Nulla facilisi. Etiam quis lacinia erat, ut rhoncus sem. Morbi risus dolor, laoreet eget libero ac, porta congue erat. In malesuada ut nunc quis pellentesque. Quisque sit amet metus sed nulla egestas tincidunt non nec nisi.',
    rawTopics: [
      'Correy',
      'Mariann',
      'Mathilda',
    ],
    contentHtml: '',
  },
];
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          Home |
          {` ${siteTitle}`}
        </title>
      </Head>
      <section className="flex flex-col justify-center">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
          Welcome to DailyDev.io,
        </h1>
        <h3 className="text-lg lg:text-3xl my-4 lg:my-6 leading-tight text-gray-700">
          The goal of this site is to create content to aid you through your web development journey with tools, tips and experiences.
        </h3>
        <p className="text-md lg:text-2xl font-medium">
          Start with our most recents posts <a href="#posts" className="text-primary underline">bellow</a>, or browse our <Link href="/topics"><a className="text-secondary underline">topics</a></Link>.
        </p>
      </section>
      <section className="py-8" id="posts">
        <CardGroup posts={posts} />
        <div className="flex flex-row justify-center my-4 md:my-8">
          <Cta icon="ellipsis" />
        </div>
      </section>
    </Layout>
  );
}
