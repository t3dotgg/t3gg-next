import Link from "next/link";
import { AnimatedBackground } from "../components/animated-background";
import Page from "../components/page";

const HomeBody = () => (
  <div className="home-page--content">
    <div className="home-page--content--header">
      <h1>Hiya</h1>
      <p>{"I'm Theo, and I like to build things"}</p>
      <p>
        {"Full stack engineer at "}
        <a href="https://twitch.tv/theo">Twitch</a>
        {" since January 2017"}
      </p>
      <p>I like skateboards, music, art, and various nonsense</p>
      <p>
        Take a look at my <a href="https://github.com/theobr">Github</a>,{" "}
        <a href="https://twitter.com/TheoOnTwitch">Twitter</a>, or{" "}
        <a href="https://github.com/TheoBr/TheoBr/blob/master/about/resume.md">
          resume
        </a>
      </p>
    </div>
    <div className="home-page--content--footer">
      <p>
        Oh, also,{" "}
        <Link href="/blog">
          <a>check out my new blog</a>
        </Link>
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <Page>
      <div className="home-page">
        <HomeBody />
      </div>
      <AnimatedBackground />
    </Page>
  );
}
