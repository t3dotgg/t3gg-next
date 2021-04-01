import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData, PostData } from "../../lib/posts";
import { GetStaticProps } from "next";
import Post from "../../components/post";

const description =
  "Theo's blog. Dumping ground for thoughts on tech, audio gear, life, and cats";

export default function Home({
  allPostsData,
}: {
  allPostsData: PostData[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="twitter:image" content="https://t3.gg/images/twitter.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@t3dotgg" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://t3.gg/images/twitter.png" />
      </Head>
      <section className={utilStyles.padding1px}>
      {allPostsData.map((postData, index) => (
        <Post postData={postData} key={index} />
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
