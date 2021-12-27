import { CategoryCode } from "@/lib/content";

export interface Category {
  code: CategoryCode;
  name: string;
  pages?: MarkdownPageData[];
}

export interface Frontmatter {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;

  icon: string;

  showContents: boolean;
  linkedPages: LinkedPage[];
}

export interface MarkdownPageData {
  // The first code is the main code (one that will be in the URL)
  categoryCodes: CategoryCode[];
  slug: string;

  frontmatter?: Frontmatter;

  // "Code" from MDX-bundler for rendering the content
  code?: any;
}
export type IncompleteMarkdownPageData = Omit<
  MarkdownPageData,
  "code" | "frontmatter"
>;

export interface LinkedPage {
  icon: string;
  url: string;
  title: string;
  description: string;
}
