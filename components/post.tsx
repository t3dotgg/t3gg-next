import Link from "next/link";
import Date from "./date";
import { PostData } from "../lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import utilStyles from "../styles/utils.module.css";

export default function Post({
  postData,
  singlePostPage,
}: {
  postData: PostData;
  singlePostPage?: boolean;
}) {
  const Content = getMDXComponent(postData.sourceMDX);
  return (
    <article className="prose prose-lg">
      {generateTitle(postData.title, postData.id, !singlePostPage)}
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
      <Content />
    </article>
  );
}

const generateTitle = (title: string, id: string, showLink: boolean) => {
  if (showLink)
    return (
      <Link href={`/blog/posts/${id}`}>
        <h1 className={utilStyles.headingXl}>
          <a>{title}</a>
        </h1>
      </Link>
    );

  return <h2 className={utilStyles.headingXl}>{title}</h2>;
};