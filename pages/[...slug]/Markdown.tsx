import clsx from "clsx";
import Contents from "@/components/Contents";
import Highlight from "@/components/Highlight";
import Icon from "@/components/Icon";
import LinkedPages from "@/components/LinkedPages";
import substitutedComponents from "@/components/markdown/substituted";
import Spacer from "@/components/Space";
import Title from "@/components/typography/Title";
import { formatDate } from "@/lib/date";
import { Category, MarkdownPageData } from "@/types/content";
import { getMDXComponent } from "mdx-bundler/client";
import { NextSeo } from "next-seo";

const MarkdownPage = ({
  category,
  markdownPage,
}: {
  category: Category;
  markdownPage: MarkdownPageData;
}) => {
  const Markdown = getMDXComponent(markdownPage.code);

  // If reached here, frontmatter has to exist
  const frontmatter = markdownPage.frontmatter!;

  return (
    <>
      <NextSeo title={frontmatter.title}></NextSeo>
      <Highlight size="lg" theme="gray" className="wrapper relative">
        <div className="absolute font-black" style={{ fontSize: `10rem` }}>
          <span className="opacity-5">{frontmatter.title.slice(0, 2)}</span>
        </div>

        {/* <Icon>✏️</Icon> */}

        <Icon id={frontmatter.icon} size="lg"></Icon>
        <Spacer></Spacer>
        <Title>{frontmatter.title}</Title>
        <Spacer size="xs"></Spacer>
        <div className="font-display flex space-x-xs text-gray-dark">
          {category && (
            <>
              <span>{category.name}</span>
              <span>{"·"}</span>
              <span className="text-gray">
                {formatDate(new Date(frontmatter.lastUpdated))}
              </span>
            </>
          )}
        </div>
      </Highlight>

      <Spacer size="xl"></Spacer>

      <article className="wrapper prose relative">
        <div
          style={{ gridColumn: 1 }}
          className={clsx("hidden lg:block absolute h-full px-md", {
            "opacity-0 transition-opacity hover:opacity-100":
              !frontmatter.showContents,
          })}
        >
          <div className="sticky" style={{ top: "12rem" }}>
            <Contents></Contents>
          </div>
        </div>

        <Markdown components={substitutedComponents}></Markdown>
      </article>

      <Spacer size="xl"></Spacer>

      {frontmatter.linkedPages.length > 0 && (
        <>
          <hr />
          <Spacer size="xl"></Spacer>
          <div className="wrapper">
            <Title level={2}>Related</Title>

            <Spacer></Spacer>
            <LinkedPages
              ghost
              size="base"
              pages={frontmatter.linkedPages}
            ></LinkedPages>
          </div>
        </>
      )}
    </>
  );
};
export default MarkdownPage;
