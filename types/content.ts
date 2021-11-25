export interface Frontmatter {
  title: string;
  description: string;
  lastUpdated: string;
}

export interface MarkdownPageData {
  frontmatter: Frontmatter;
  code: any;
}
