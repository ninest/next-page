import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="text-7xl mb-xs">📉</div>
      <h1 className="text-4xl font-extrabold tracking-wide">First Page</h1>
      <article className="prose mt-base">
        <p>
          This is a website for storing information and content for your choice!
          Here are some features:
        </p>

        <ul>
          <li>Easy to use</li>
          <li>Easy to customize</li>
          <li>Emoji yay!</li>
          <li>Table of contents: on desktop, hover the mouse to the right</li>
        </ul>
      </article>
    </>
  );
};

export default IndexPage;
