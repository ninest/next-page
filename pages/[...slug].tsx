import { listToFilepath } from "../lib/file";
import { mdxFromFile } from "../lib/mdx";
import type { GetServerSidePropsContext, NextPage } from "next";
import { MarkdownPageData } from "@/types/content";
import { getMDXComponent } from "mdx-bundler/client";

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const { slug } = params!;
  const data: MarkdownPageData = await mdxFromFile(
    listToFilepath(slug as String[])
  );
  console.log(data);
  return {
    props: { data },
  };
};

const ContentPage = ({ data }: { data: MarkdownPageData }) => {
  const Markdown = getMDXComponent(data.code);
  return (
    <>
      <article>
        <h1>{data.frontmatter.title}</h1>
        <div>
          <Markdown></Markdown>
        </div>
      </article>
    </>
  );
};

export default ContentPage;
