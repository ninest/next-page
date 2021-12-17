import { listToFilepath } from "../lib/file";
import type { GetServerSidePropsContext } from "next";
import { Category, MarkdownPageData } from "../types/content";
import { getMDXComponent } from "mdx-bundler/client";
import {
  CategoryCode,
  categoryCodes,
  getPost,
  getPostsFromList,
} from "../lib/content";
import { categories, posts } from "../lib/content-map";
import PostListing from "../components/PostListing";
import Title from "../components/typography/Title";
import Highlight from "../components/Highlight";
import Contents from "../components/Contents";
import Spacer from "../components/Space";
import { formatDate } from "../lib/date";
import Icon from "../components/Icon";
import clsx from "clsx";
import LinkedPages from "../components/LinkedPages";
import PagePreview from "../components/PagePreview";

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const slug = params!.slug as string[];

  /* 
  If the slug list:
  - contains only one element and
  - the one element is a categoryCode,
  The page is a "post listing" page
  */
  if (
    slug?.length! === 1 &&
    categoryCodes.includes((slug as CategoryCode[])[0])
  ) {
    // Post listing page for a particular category code
    const categoryCode = slug![0] as CategoryCode;

    const incompleteCategory: Category = categories.filter(
      (cat) => cat.code == categoryCode
    )[0];

    const completeCategory: Category = {
      ...incompleteCategory,
      pages: await getPostsFromList(
        posts.filter((post) => post.categoryCodes.includes(categoryCode))
      ),
    };

    return {
      props: { category: completeCategory },
    };
  } else {
    // Markdown page
    const markdownPage: MarkdownPageData = await getPost(
      listToFilepath(slug as String[])
    );

    let category = null;
    if (slug.length > 1) {
      const categoryCode = slug![0] as CategoryCode;
      category = categories.filter((cat) => cat.code === categoryCode)[0];
    }
    return {
      props: { category, markdownPage },
    };
  }
};

const ContentPage = ({
  markdownPage,
  category,
}: {
  markdownPage: MarkdownPageData;
  category: Category;
}) => {
  if (markdownPage) {
    return (
      <_MarkdownPage
        category={category}
        markdownPage={markdownPage}
      ></_MarkdownPage>
    );
  } else if (category) {
    return <_ContentListPage category={category}></_ContentListPage>;
  }
};

const _MarkdownPage = ({
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
      <Highlight size="lg" theme="gray" className="wrapper relative">
        <div className="absolute font-black" style={{ fontSize: `10rem` }}>
          <span className="opacity-5">{frontmatter.title.slice(0, 2)}</span>
        </div>

        {/* <Icon>✏️</Icon> */}

        <Icon id={frontmatter.icon}></Icon>
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

        <Markdown></Markdown>
      </article>

      <Spacer size="xl"></Spacer>
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
  );
};

const _ContentListPage = ({ category }: { category: Category }) => {
  return (
    <>
      <div className="wrapper">
        <Title>{category.name}</Title>

        <Spacer size="md"></Spacer>

        <div className="space-y-base">
          {category.pages?.map((post) => (
            <div key={post.slug}>
              <PostListing markdownPageData={post} ghost></PostListing>
            </div>
          ))}
        </div>
        {/* <div className="space-y-xs">
          {category.pages?.map((post) => (
            <div key={post.slug}>
              <PagePreview
                icon={post.frontmatter?.icon!}
                url={`${post.categoryCodes[0]}/${post.slug}`}
                title={post.frontmatter?.title!}
                description={post.frontmatter?.title!}
              ></PagePreview>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default ContentPage;
