import Page from "../components/page";
import Image from "next/image";
import Logo from "../assets/t3-block.svg";
import RoundLogo from "../assets/Round Text Logo.svg";
import Link from "next/link";
import Head from "next/head";

const siteTitle = "T3 Tools";
const description = "We build things for creators.";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content={description} />
        <meta name="twitter:image" content="https://t3.gg/images/twitter.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@t3dotgg" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://t3.gg/images/twitter.png" />
        <title>{siteTitle}</title>
      </Head>
      <div className="bg-gray-600 bg-opacity-50">
        <div className="flex flex-col items-center min-h-screen animate-fade-in-down text-gray-800 relative">
          <div
            className="flex flex-col justify-center items-center py-8 px-4 w-full shadow-xl bg-gray-900 bg-gradient-to-tr from-gray-900 to-gray-800 text-gray-200"
            style={{ fontFamily: "Inter" }}
          >
            <Image
              src={Logo}
              className="rounded-xl"
              loading="eager"
              alt="T3 Tools logo"
            />
            <div className="text-4xl mt-4 font-medium text-center">
              Welcome to T3 Tools
            </div>
            <p className="text-gray-400">
              Built by{" "}
              <Link href="/me">
                <a>Theo</a>
              </Link>
            </p>
          </div>
          <div className="pt-8" />

          <div className="flex flex-col justify-center max-w-2xl px-4 md:max-w-5xl ">
            <h2 className="text-4xl font-medium text-center">
              We Build Things For Creators
            </h2>
            <div className="pt-4" />
            <a href="https://round.t3.gg">
              <div className="bg-gray-800 p-4 rounded-xl flex flex-col justify-center text-gray-200">
                <Image
                  src={RoundLogo}
                  alt="Round - for video calls (logo)"
                  width={200}
                  height={60}
                />
                <div className="pt-4" />
                <p className="text-center">
                  The best way to have multiple people on your stream.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export const config = {
  unstable_JsPreload: false,
};
