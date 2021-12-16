import { Category, MarkdownPageData } from "../types/content";

export const categories: Category[] = [
  { code: "python", name: "Python" },
  { code: "javascript", name: "JavaScript" },
  { code: "nextjs", name: "NextJS" },
  { code: "vscode", name: "VScode" },
  { code: "blog", name: "Blog" },
  { code: "html", name: "HTML" },
  { code: "git", name: "Git" },
  { code: "mac", name: "Mac" },
  { code: "cli", name: "CLI" },
  { code: "cs", name: "Computer Science" },
];

export const posts: MarkdownPageData[] = [
  // Blog posts
  { categoryCodes: ["blog"], slug: "first-post" },
  { categoryCodes: ["blog"], slug: "s" },

  // CS posts
  { categoryCodes: ["cs", "blog"], slug: "searching" },
];
export const featuredPosts: MarkdownPageData[] = [];
