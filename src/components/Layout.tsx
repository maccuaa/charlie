import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import "normalize.css";

import Nav from "./Nav";

import siteMetadata from "../lib/metadata.json";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div id="root">
    <style global jsx>{`
      @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap");

      body {
        font-family: "Open Sans", sans-serif;
        background-color: ${siteMetadata.primary};
        color: #fff;
        height: 100vh;
        margin: 0;
        padding: 0;
        width: 100%;
      }

      a {
        color: inherit;
      }

      @media screen and (min-width: 768px) {
        #wrapper {
          margin: 0 auto;
          max-width: 960px;
        }

        main {
          margin: 0;
        }
      }
    `}</style>

    <Head>
      <link rel="icon" href={siteMetadata.icon} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content={siteMetadata.primary} />
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
      <Nav />
      <main>{children}</main>
    </div>
  </div>
);

export default Layout;
