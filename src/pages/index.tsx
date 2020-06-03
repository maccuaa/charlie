import * as React from "react";

import "normalize.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

import Age from "../components/Age";
import Layout from "../components/Layout";
import PostComponent from "../components/Post";
import { getLatestPostURL } from "../lib/instagram-posts";

const siteMetadata = {
  title: "Charlie",
  description: "How old is Charlie? 🐶",
  author: "Andrew MacCuaig",
  canonical: "https://howoldischarlie.ca",
  icon: "/paw-icon.png",
};

interface Props {
  url: string;
}

const Home = ({ url }: Props) => (
  <>
    <Head>
      <link rel="icon" href={siteMetadata.icon} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#9A382A" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <NextSeo
      title={siteMetadata.title}
      description={siteMetadata.description}
      canonical={siteMetadata.canonical}
      openGraph={{
        title: siteMetadata.title,
        description: siteMetadata.description,
        type: "website",
        url: siteMetadata.canonical,
        images: [
          {
            url: siteMetadata.icon,
          },
        ],
      }}
    />

    <Layout>
      <Age />
      <PostComponent url={url} />
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
