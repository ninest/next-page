import Link from "next/link";
import { formatShortDate } from "../lib/date";
import { MarkdownPageData } from "../types/content";
import SmartLink from "./SmartLinks";
import Spacer from "./Space";

const PostPreview = ({
  markdownPageData,
}: {
  markdownPageData: MarkdownPageData;
}) => {
  const frontmatter = markdownPageData.frontmatter!;
  return (
    <>
      <SmartLink
        href={`/${markdownPageData.categoryCodes[0]}/${markdownPageData.slug}`}
        className="full-bleed flex items-center rounded-md hover:bg-blue-100 p-sm -m-sm"
      >
        <div className="min-w-[6rem] text-sm font-semibold text-gray">
          {formatShortDate(new Date(frontmatter.lastUpdated))}
        </div>
        <h3 className="font-semibold">{frontmatter.title}</h3>
      </SmartLink>
    </>
  );
};

export default PostPreview;
