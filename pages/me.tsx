import Link from "next/link";
import { AnimatedBackground } from "../components/animated-background";
import Page from "../components/page";

const HomeBody = () => (
  <div className="home-page--content">
    <div className="home-page--content--header">
      <h1 className="font-bold text-2xl py-4">Hiya</h1>
      <p>{"I'm Theo, and I like to build things"}</p>
      <p>
        {"Full stack engineer at "}
        <a href="https://tt.fm">Turntable</a>
        {" since February 2021"}
      </p>
      <p>
        Alumni of <a href="https://twitch.tv">Twitch</a> and{" "}
        <a href="https://rpi.edu">RPI</a>
      </p>
      <p>I like skateboards, music, art, and various nonsense</p>
      <p>Check out my...</p>
      <div className="flex flex-col">
        <div>
          -{" "}
          <Link href="/projects">
            <a>Projects/Portfolio</a>
          </Link>
        </div>
        <div>
          -{" "}
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
        <div>
          - <a href="https://github.com/theobr">Github</a>
        </div>
        <div>
          - <a href="https://twitter.com/t3dotgg">Twitter</a>
        </div>
      </div>
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

export const config = {
  unstable_JsPreload: false,
};
