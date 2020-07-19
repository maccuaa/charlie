import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

import siteMetadata from "../lib/metadata.json";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div id="root">
    <style global jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Quicksand:300,&display=swap");

      body {
        font-family: "Quicksand", sans-serif;
        font-weight: 300;
        background-color: #9a382a;
        color: #fff;
        height: 100vh;
        margin: 0;
        padding: 0;
        width: 100%;
      }

      #root {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        justify-content: center;
      }

      #wrapper {
        ovrflow: auto;
      }

      main {
        margin: 24px;
      }

      a {
        color: inherit;
      }

      @media screen and (min-width: 768px) {
        #wrapper {
          margin: 0 auto;
          max-width: 960px;
          overflow: hidden;
        }

        main {
          margin: 0;
        }
      }

      @media screen and (min-height: 634px) {
        #root {
          height: 100vh;
        }
      }
    `}</style>

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

    <div id="wrapper">
      <main>{children}</main>
    </div>
  </div>
);

export default Layout;
