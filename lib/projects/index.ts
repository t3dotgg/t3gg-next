import path from "path";
import { bundleMDX } from "mdx-bundler";
import fs from "fs";

const pathToMdx = path.join(process.cwd(), "lib/projects/projects.mdx");

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
  const fileContents = fs.readFileSync(pathToMdx, "utf8");
  const { code, frontmatter } = await bundleMDX(fileContents, {
    globals: {
      "next/image": "image",
      copo: "copo",
      chrome: "chrome",
      doge: "doge",
      mod: "mod",
      manager: "manager",
      ttfmmobile: "ttfmmobile",
      ttfmweb: "ttfmweb",
      studio: "studio",
    },
  });

  return code;
}
