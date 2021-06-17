import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import { getMDXComponent } from "mdx-bundler/client";
import { getProjectsPageInfo } from "../lib/projects";

import Image from "next/image";
import copo from "../lib/projects/images/channel-points-queue.png";
import chrome from "../lib/projects/images/chrometana.jpeg";
import doge from "../lib/projects/images/dogecoin-simulator.png";
import mod from "../lib/projects/images/mod-view.jpeg";
import manager from "../lib/projects/images/stream-manager.png";
import ttfmmobile from "../lib/projects/images/ttfm-mobile.png";
import ttfmweb from "../lib/projects/images/ttfm-web.png";
import studio from "../lib/projects/images/twitch-studio-mac.jpeg";
import insquare from "../lib/projects/images/insquare.jpeg";

const description = "A bunch of random things I've made";

const siteTitle = "Theo's Projects";

export default function Projects({ mdxSource }: { mdxSource: string }) {
  const Content = getMDXComponent(mdxSource, {
    image: Image,
    copo,
    chrome,
    doge,
    mod,
    manager,
    ttfmmobile,
    ttfmweb,
    studio,
    insquare,
  });
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
