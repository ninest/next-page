import PostListing from "@/components/PostListing";
import Spacer from "@/components/Space";
import Title from "@/components/typography/Title";
import { Category } from "@/types/content";

const ContentListPage = ({ category }: { category: Category }) => {
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
   
      </div>
    </>
  );
};

export default ContentListPage;
