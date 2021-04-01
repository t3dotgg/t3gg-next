import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";

if(process.platform === "win32"){
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'esbuild.exe')
}else{
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'bin', 'esbuild')
}

const postsDirectory = path.join(process.cwd(), "posts");

export type PostData = {
  date: string;
  title: string;
  id: string;
  sourceMDX: string;
  description?: string;
  imageURL?: string;
  twitterImageURL?: string;
};

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md(x|)$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use next-mdx-remote to convert markdown into react-renderable MDX string
      const { code, frontmatter } = await bundleMDX(fileContents);

      // Combine the data with the id
      return {
        id,
        sourceMDX: code,
        ...(frontmatter as { date: string; title: string }),
      };
    })
  );

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md(x|)$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use next-mdx-remote to convert markdown into react-renderable MDX string
  const { code, frontmatter } = await bundleMDX(fileContents);

  // Combine the data with the id and contentHtml
  return {
    id,
    sourceMDX: code,
    ...(frontmatter as { date: string; title: string }),
  };
}
