import clsx from "clsx";
import { Frontmatter, MarkdownPageData } from "../types/content";
import SmartLink from "./SmartLinks";

interface LinkedPagesProps {
  pages: Frontmatter["linkedPages"];
}

const LinkedPages = ({ pages }: LinkedPagesProps) => {
  return (
    <>
      {pages.map((page) => (
        <SmartLink className="block" href={page.url}>
          {page.title} : {page.description}
        </SmartLink>
      ))}
    </>
  );
};

export default LinkedPages;
