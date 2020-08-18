/* eslint-disable react/jsx-one-expression-per-line, max-len */
import Head from 'next/head';
import classnames from 'classnames';

import Layout, { siteTitle } from '../components/layout/layout';
import { getAuthorData } from '../lib/persons';

import styles from './about.module.css';

export default function About({
  person,
}: {
  person: IPerson
}) {
  return (
    <Layout>
      <Head>
        <title>
          About |
          {` ${siteTitle}`}
        </title>
        <meta
          name="description"
          content="All things Web Dev"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className="flex flex-col justify-center">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
          Hi <span role="img" aria-label="waving hand">👋</span>,
        </h1>
        <h3 className="text-lg lg:text-3xl my-4 lg:my-6 leading-tight">
          Glad that you are here! This website was created with the intent of sharing the best of our knowledge in order to help you in your <a href="https://twitter.com/search?q=%23DEV&src=typed_query&f=live" className="text-primary">#DEV</a> journey.
        </h3>
        {/* <p className="text-md lg:text-2xl font-medium">
          This site was created with <a href="https://nextjs.org/" className="text-primary underline">NextJS</a> and <a href="https://www.contentful.com/" className="text-primary underline">Contentful</a>.
        </p> */}
      </section>
      <section className="flex flex-col my-2 md:my-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Powered by:</h3>
        <div className="flex flex-row justify-between items-center w-full md:w-3/5 mx-auto my-4 lg:my-6 p-6 bg-white rounded-md">
          <a className="w-1/3" href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <img src="/images/Nextjs-logo.png" alt="NextJS logo" />
          </a>
          <a className="w-1/3" href="https://www.contentful.com/" target="_blank" rel="noreferrer">
            <img src="/images/contentful-logo.png" alt="Contentful logo" />
          </a>
          <a className="w-1/3" href="https://www.vercel.com/" target="_blank" rel="noreferrer">
            <img src="/images/vercel-logo.png" alt="Vercel logo" />
          </a>
        </div>
      </section>
      <section className="flex flex-col my-2 md:my-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Created by:</h3>
        <div className={
          `flex flex-col lg:flex-row justify-start items-center
            md:w-4/5 mx-auto my-4 mt-20 lg:mt-16 lg:mb-8 lg:h-48
            bg-white rounded-2lg shadow`
        }
        >
          <img className="h-32 md:h-40 -mt-12 lg:-ml-8 rounded-2lg lg:h-full object-contain shadow-lg" src={person.image.url} alt={person.image.title} />
          <div className="flex flex-col p-8">
            <h4 className="font-bold text-lg md:text-2xl">{person.name}</h4>
            <p className="my-2 leading-snug text-md md:text-lg">{person.shortBio}</p>
            <div className={classnames(
              'flex flex-row my-2',
              styles.socialIcons,
            )}
            >
              {person.facebook
                && (
                  <a href={person.facebook} target="_blank" rel="noreferrer">
                    <img className="h-6" src="/icons/facebook.png" alt="Facebook" />
                  </a>
                )}
              {person.twitter
                && (
                  <a href={person.twitter} target="_blank" rel="noreferrer">
                    <img className="h-6" src="/icons/twitter.png" alt="Twitter" />
                  </a>
                )}
              {person.github
                && (
                  <a href={person.github} target="_blank" rel="noreferrer">
                    <img className="h-6" src="/icons/github.png" alt="GitHub" />
                  </a>
                )}
              {person.linkedIn
                && (
                  <a href={person.linkedIn} target="_blank" rel="noreferrer">
                    <img className="h-6" src="/icons/linkedin.png" alt="LinkedIn" />
                  </a>
                )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const person = await getAuthorData('Igor Silveira');
  return {
    props: { person },
  };
};
