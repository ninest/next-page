import type { NextPage } from "next";
import Icon from "@/components/Icon";
import Title from "@/components/typography/Title";
import Spacer from "@/components/Space";
import Space from "@/components/Space";
// import Space from "@/components/Space";

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="wrapper">
        <Space size="xl"></Space>
        <Icon id="grin" size="lg"></Icon>
        <Spacer size="md"></Spacer>

        <Title>Welcome to First Page!</Title>
        <Spacer></Spacer>

        <article className="prose">
          <p>
            This is a website for storing information and content for your
            choice! Here are some features:
          </p>

          <ul>
            <li>Easy to use</li>
            <li>Easy to customize</li>
            <li>Emoji yay!</li>
            <li>Table of contents: on desktop, hover the mouse to the right</li>
          </ul>
        </article>
      </div>
    </>
  );
};

export default IndexPage;
