import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

export const siteTitle = "Theo's Blog";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <div className="accent-one" />
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/icon.png" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <h3>Theo's Blog</h3>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/blog">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
