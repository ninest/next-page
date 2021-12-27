import { listToFilepath } from "@/lib/file";
import type { GetServerSidePropsContext } from "next";
import { Category, MarkdownPageData } from "@/types/content";

import {
  CategoryCode,
  categoryCodes,
  getPost,
  getPostsFromList,
} from "@/lib/content";
import { categories, posts } from "@/lib/content-map";

import MarkdownPage from "@/pages/[...slug]/Markdown";
import ContentListPage from "@/pages/[...slug]/CategoryList";

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
      <MarkdownPage
        category={category}
        markdownPage={markdownPage}
      ></MarkdownPage>
    );
  } else if (category) {
    return <ContentListPage category={category}></ContentListPage>;
  }
};

export default ContentPage;