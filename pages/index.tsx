import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>
      <section className="h-screen flex flex-col justify-center px-2 md:px-24 xl:px-32">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Welcome to DailyDev.io,
            </h1>
          <h3 className="text-lg lg:text-3xl my-4 lg:my-6 leading-tight text-gray-700">
            The goal of this site is to create content to aid you through your web development journey with tools, tips and experiences.
            </h3>
          <p className="text-md lg:text-2xl font-medium">
            It is still <span className="text-yellow">under construction</span>, but check in again soon and <span className="text-blue">subscribe</span> for updates! 🚧
            </p>
        </div>
        <form className="flex flex-col mt-8 lg:mt-16 lg:w-1/3">
          <input className={styles.formInput} type="text" aria-label="name" placeholder="Name"/>
          <input className={styles.formInput} type="email" aria-label="email" placeholder="Email"/>
          <button className={styles.formSubmitButton} type="submit">Keep me posted!</button>
        </form>
      </section>
    </Layout>
  );
}
