import * as React from "react";

import "normalize.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

import Age from "../components/Age";
import Layout from "../components/Layout";
import PostComponent from "../components/Post";
import { instagramPosts, Post } from "../lib/instagram-posts";

const siteMetadata = {
  title: "Charlie",
  description: "How old is Charlie? 🐶",
  author: "Andrew MacCuaig",
  canonical: "https://howoldischarlie.ca",
  icon: "/paw-icon.png"
};

interface Props {
  post: Post;
}

const Home = ({ post }: Props) => (
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
            url: siteMetadata.icon
          }
        ]
      }}
    />

    <Layout>
      <Age />
      <PostComponent post={post} />
    </Layout>
  </>
);

export async function unstable_getStaticProps() {
  const posts = await instagramPosts("the.charlie.dood", { count: 1 });

  return {
    props: {
      post: posts[0]
    }
  };
}

export default Home;
