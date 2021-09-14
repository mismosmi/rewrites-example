import { GetStaticPaths, GetStaticProps } from "next";

export default function Fallback() {
  return null;
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: false,
  };
};
