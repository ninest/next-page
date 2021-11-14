import type { GetServerSidePropsContext, NextPage } from "next";

export const getServerSideProps = ({ params }: GetServerSidePropsContext) => {
  console.log(params);
  return {
    props: {},
  };
};

const ContentPage: NextPage = () => {
  return <>This page should be a react server component</>;
};

export default ContentPage;
