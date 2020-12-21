import Head from "next/head";

export const siteTitle = "Theo Browne";

export default function Page({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" />
        <meta
          name="description"
          content="Theo Browne is a full stack engineer and React expert with years of experience working at Twitch.tv"
        />
        <meta name="twitter:image" content="/images/twitter.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      {children}
    </>
  );
}
