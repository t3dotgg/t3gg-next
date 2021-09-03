import Link from "next/link";
import Date from "./date";
import { PostData } from "../lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-bash.min";
import "prismjs/components/prism-typescript.min";
import "prismjs/components/prism-json.min";

export default function Post({
  postData,
  singlePostPage,
}: {
  postData: PostData;
  singlePostPage?: boolean;
}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const Content = getMDXComponent(postData.sourceMDX);
  const showReadMore = !singlePostPage && postData.readMore;
  return (
    <article className="prose prose-lg lg:prose-xl mb-8">
      {generateTitle(postData.title, postData.id, !singlePostPage)}
      <div className="m-0 p-0">
        <Date dateString={postData.date} />
      </div>
      <div
        style={{
          maxHeight: showReadMore ? 600 : undefined,
          overflow: "hidden",
          position: "relative",
          paddingBottom: showReadMore ? "1rem" : undefined,
          marginBottom: "1rem",
        }}
      >
        <Content />
        {showReadMore && <ReadMore id={postData.id} />}
      </div>
    </article>
  );
}

const ReadMore: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Link href={`/blog/posts/${id}`}>
      <div
        style={{
          display: "flex",
          position: "absolute",
          bottom: 0,
          width: "100%",
          fontSize: "1.3rem",
          height: 200,
          justifyContent: "center",
          alignItems: "flex-end",
          backgroundImage:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 1.0) 85%)",
          cursor: "pointer",
        }}
      >
        <a className="font-medium no-line-link">Continue Reading</a>
      </div>
    </Link>
  );
};

const generateTitle = (title: string, id: string, showLink: boolean) => {
  if (showLink)
    return (
      <Link href={`/blog/posts/${id}`}>
        <a className="no-line-link m-0">
          <h2
            className="m-0 p-0 font-bold"
            style={{ marginBlockEnd: 0, marginBlockStart: "1rem" }}
          >
            {title}
          </h2>
        </a>
      </Link>
    );

  return (
    <h2
      className="m-0 p-0 font-bold"
      style={{ marginBlockEnd: 0, marginBlockStart: "1rem" }}
    >
      {title}
    </h2>
  );
};
