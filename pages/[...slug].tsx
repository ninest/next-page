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
      <div className="text-7xl mb-xs">✏️</div>
      <h1 className="text-4xl font-extrabold tracking-wide">
        {data.frontmatter.title}
      </h1>
      <article className="prose mt-base">
        <Markdown></Markdown>
      </article>

      <div className="fixed h-full top-0 right-0 opacity-0 hover:opacity-100 p-base pt-64">
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </div>
    </>
  );
};

export default ContentPage;
