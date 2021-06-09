import Head from "next/head";

export const siteTitle = "Theo Browne, Software Developer";
const description =
  "Theo Browne is a full stack engineer and React expert. Alumni of Twitch.tv and RPI, creator of Mod View, Chrometana and InSquare. Currently hacking away at tt.fm";

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
        <meta name="description" content={description} />
        <meta name="twitter:image" content="https://t3.gg/images/twitter.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@t3dotgg" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://t3.gg/images/twitter.png" />
        <title>{siteTitle}</title>
      </Head>
      {children}
    </>
  );
}
