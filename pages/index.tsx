import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

const HomeBody = () => (
  <div className="home-page--content">
    <div className="home-page--content--header">
      <h1>Hiya</h1>
      <p>{"I'm Theo, and I like to build things"}</p>
      <p>
        {"Full stack engineer at "}
        <a href="https://twitch.tv">Twitch</a>
        {" since January 2017"}
      </p>
      <p>I like skateboards, music, art, and various nonsense</p>
      <p>
        Check out my <a href="https://github.com/theobr">Github</a>,{" "}
        <a href="https://twitter.com/TheoOnTwitch">Twitter</a>, and{" "}
        <a href="https://twitch.tv/Theo">Twitch Channel</a>
      </p>
    </div>
    <div className="home-page--content--footer">
      <p>
        You can find{" "}
        <a href="https://github.com/TheoBr/TheoBr/blob/master/about/resume.md">
          my resume
        </a>{" "}
        and{" "}
        <a href="https://github.com/TheoBr/TheoBr/blob/master/about/projects.md">
          my projects list
        </a>{" "}
        on <a href="https://github.com/TheoBr/TheoBr">Github</a>
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="home-page">
      <HomeBody />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
