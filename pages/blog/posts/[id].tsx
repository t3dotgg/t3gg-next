import Layout from "../../../components/layout";
import { getAllPostIds, getPostData, PostData } from "../../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Post from "../../../components/post";

export default function PostPageView({ postData }: { postData: PostData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <link href="/modules/prism.css" rel="stylesheet" />
        <meta
          name="twitter:image"
          content={postData.imageURL ?? "https://t3.gg/images/twitter.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@t3dotgg" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta
          property="og:image"
          content={postData.imageURL ?? "https://t3.gg/images/twitter.png"}
        />
      </Head>
      <article>
        <Post postData={postData} singlePostPage />
      </article>
      <script src="/modules/prism.js"></script>
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
