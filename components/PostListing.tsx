import clsx from "clsx";
import { formatShortDate } from "@/lib/date";
import { MarkdownPageData } from "@/types/content";
import SmartLink from "@/components/SmartLinks";

const PostListing = ({
  markdownPageData,
  ghost = false,
}: {
  markdownPageData: MarkdownPageData;
  ghost?: boolean;
}) => {
  const frontmatter = markdownPageData.frontmatter!;
  return (
    <>
      <SmartLink
        href={`/${markdownPageData.categoryCodes[0]}/${markdownPageData.slug}`}
        className={clsx(
          "full-bleed flex items-center rounded-md hover:bg-primary-lightest",
          { "p-sm -m-sm": ghost, "p-md": !ghost }
        )}
      >
        <div className="min-w-[6rem] text-sm font-semibold text-gray">
          {formatShortDate(new Date(frontmatter.lastUpdated))}
        </div>
        <h3 className="font-semibold text-gray">{frontmatter.title}</h3>
      </SmartLink>
    </>
  );
};

export default PostListing;
