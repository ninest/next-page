import clsx from "clsx";
import { Frontmatter } from "@/types/content";
import PagePreview, { PagePreviewProps } from "./PagePreview";

interface LinkedPagesProps {
  pages: Frontmatter["linkedPages"];
  ghost?: PagePreviewProps["ghost"];
  size?: PagePreviewProps["size"];
}

const LinkedPages = ({ pages, ghost, size }: LinkedPagesProps) => {
  return (
    <>
      <div className="space-y-md">
        {pages.map((page) => (
          <PagePreview
            key={page.url}
            url={page.url}
            icon={page.icon}
            title={page.title}
            description={page.description}
            ghost={ghost}
            size={size}
          ></PagePreview>
        ))}
      </div>
    </>
  );
};

export default LinkedPages;
