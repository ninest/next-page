import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="text-7xl mb-xs">📄</div>
      <h1 className="text-4xl font-extrabold tracking-wide">Blog</h1>
      <article className="prose mt-base">
        <p>Read the latest posts</p>
      </article>
    </>
  );
};

export default IndexPage;
