import path from "path";
import { bundleMDX } from "mdx-bundler";

if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "esbuild.exe"
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild"
  );
}

export async function getProjectsPageInfo() {
  const data = await fetch(
    "https://raw.githubusercontent.com/TheoBr/TheoBr/master/about/projects.md"
  );
  const text = await data.text();
  const { code, frontmatter } = await bundleMDX(text);

  return code;
}
