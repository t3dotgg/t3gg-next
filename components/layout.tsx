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
    <div className={styles.scrollablePage}>
      <div className={styles.accentOne} />
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <h3>Theo's Blog</h3>
        <main>{children}</main>
        {home ? (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to homepage</a>
            </Link>
          </div>
        ) : (
          <div className={styles.backToHome}>
            <Link href="/blog">
              <a>← Back to all articles</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
