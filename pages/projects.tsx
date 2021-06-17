import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getMDXComponent } from "mdx-bundler/client";
import { getProjectsPageInfo } from "../lib/projects";

const description = "Things Theo Did (Mostly Good Ones)";

export default function Projects({ mdxSource }: { mdxSource: string }) {
  const Content = getMDXComponent(mdxSource);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="twitter:image" content="https://t3.gg/images/twitter.png" />
        <link href="/modules/prism.css" rel="stylesheet" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@t3dotgg" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://t3.gg/images/twitter.png" />
      </Head>
      <article className="prose prose-lg">
        <section className={utilStyles.padding1px}>
          <Content />
        </section>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mdxSource = await getProjectsPageInfo();
  return {
    props: {
      mdxSource,
    },
  };
};
