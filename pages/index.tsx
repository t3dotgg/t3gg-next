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
      <main className="w-full h-full special-height text-gray-800 relative">
        <div className="absolute right-0 top-0 p-4 z-10 text-xl font-bold text-right">
          <a href="https://discord.gg/usjCgjJHNT">Discord</a>
          <br />
          <a href="https://twitter.com/t3dotgg">Twitter</a>
          <br />
          <a href="/blog">Blog</a>
        </div>
        <div className="flex flex-col items-center overflow-visible">
          <div className="flex flex-col justify-center items-center pt-2 pb-16 px-4 w-full h-[40vh] animated-bg relative">
            <img
              src={"/assets/t3-text-block.svg"}
              className="rounded-xl z-10 h-full"
              alt="T3 Tools logo"
            />
            <div className="absolute w-full h-24 bottom-0 bg-blend z-0"></div>
          </div>
          <div className="pt-8"></div>

          <div className="flex flex-col justify-center max-w-2xl px-4 md:max-w-5xl ">
            <h2 className="text-4xl font-medium text-center">
              We Build Creator Tools
            </h2>
            <div className="pt-8"></div>
            <a href="https://round.t3.gg">
              <div className="bg-gray-800 p-4 rounded-xl flex flex-col justify-center items-center text-gray-200">
                <img
                  src={"/assets/Round Text Logo.svg"}
                  className="rounded-xl"
                  alt="T3 Tools logo"
                  width={200}
                />
                <div className="pt-4"></div>
                <p className="text-center">
                  The best way to have multiple people on your stream.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="absolute w-full bottom-0 flex justify-center py-4 text-xl">
          <span>
            Created by <a href="/me">Theo</a>
          </span>
        </div>
      </main>
    </>
  );
}

export const config = {
  unstable_JsPreload: false,
  unstable_runtimeJS: false,
};
