import * as React from "react";

import "normalize.css";

import Age from "../components/Age";
import Layout from "../components/Layout";
import LatestPost from "../components/LatestPost";
import { getLatestPostURL } from "../lib/instagram-posts";

interface Props {
  url: string;
}

const Home = ({ url }: Props) => (
  <>
    <Layout>
      <Age />
      <LatestPost url={url} />
    </Layout>
  </>
);

export async function getStaticProps() {
  const url = await getLatestPostURL("the.charlie.dood");

  return {
    props: {
      url,
    },
  };
}

export default Home;
