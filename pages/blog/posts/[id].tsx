import Layout from "../../../components/layout";
import { getAllPostIds, getPostData, PostData } from "../../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Post from "../../../components/post";

const getHostname = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_URL)
    return "https://" + process.env.NEXT_PUBLIC_VERCEL_URL;
  if (process.env.DEPLOY_URL) return "https://" + process.env.DEPLOY_URL;
  if (process.env.SITE_URL) return "https://" + process.env.SITE_URL;

  return "http://localhost:8080";
};

export default function PostPageView({ postData }: { postData: PostData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta
          name="twitter:image"
          content={getHostname() + (postData.imageURL ?? "/images/twitter.png")}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@t3dotgg" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta
          property="og:image"
          content={getHostname() + (postData.imageURL ?? "/images/twitter.png")}
        />
      </Head>
      <article>
        <Post postData={postData} singlePostPage />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
