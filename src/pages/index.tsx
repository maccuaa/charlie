import * as React from "react";

import "normalize.css";

import Age from "../components/Age";
import Layout from "../components/Layout";
import LatestPost from "../components/LatestPost";
import { getLatestPostURL } from "../lib/instagram-posts";

interface Props {
  caption: string;
  display_url: string;
  shortcode: string;
}

const Home = ({ caption, display_url, shortcode }: Props) => (
  <>
    <Layout>
      <Age />
      <LatestPost
        caption={caption}
        imageUrl={display_url}
        shortcode={shortcode}
      />
    </Layout>
  </>
);

export async function getStaticProps() {
  const { caption, display_url, shortcode } = await getLatestPostURL();

  return {
    props: {
      caption,
      display_url,
      shortcode,
    },
  };
}

export default Home;
