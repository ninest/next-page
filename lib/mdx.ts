import path from "path";
import { bundleMDX } from "mdx-bundler";
import remarkCodeMeta from "remark-code-meta";

import { readFile } from "@/lib/file";

export function mdxFromString(markdown: string) {}

export async function mdxFromFile<T>(filepath: string) {
  const source = readFile(`${filepath}/index.md`).trim();

  /* 
  Fix for Nextjs esbuild ENOENT
  https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent 
  */
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

  const { code, frontmatter } = await bundleMDX({
    source,
    xdmOptions(options, frontmatter) {
      // Return xdmOptions: https://github.com/kentcdodds/mdx-bundler#xdmoptions
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkCodeMeta,
      ];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      return options;
    },
  });

  /* Convert dates to string for Nextjs */
  Object.keys(frontmatter).forEach((key) => {
    if (frontmatter[key] instanceof Date) {
      frontmatter[key] = (frontmatter[key] as Date).toISOString();
    }
  });

  return {
    code,
    frontmatter,
  } as unknown as T;
}
