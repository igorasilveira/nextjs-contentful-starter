/* eslint-disable react/jsx-one-expression-per-line, max-len */
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          Home |
          {` ${siteTitle}`}
        </title>
      </Head>
      <section className="h-screen flex flex-col justify-center">
        <div className="animate__animated animate__fadeInUp">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Welcome to DailyDev.io,
          </h1>
          <h3 className="text-lg lg:text-3xl my-4 lg:my-6 leading-tight text-gray-700">
            The goal of this site is to create content to aid you through your web development journey with tools, tips and experiences.
          </h3>
          <p className="text-md lg:text-2xl font-medium">
            Start with our most recents posts <span className="text-primary underline">bellow</span>, or browse our <span className="text-secondary underline">topics</span>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
