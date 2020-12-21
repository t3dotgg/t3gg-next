import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    contentHtml: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.padding1px}>
        {allPostsData.map(({ id, date, title, contentHtml }) => (
          <article key={id}>
            <Link href={`/blog/posts/${id}`}>
              <a>
                <h1 className={utilStyles.headingXl}>{title}</h1>
              </a>
            </Link>
            <div className={utilStyles.lightText}>
              <Date dateString={date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
