import React from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundColor: "#9A382A",
        color: "#FFF",
        height: "100%",
        display: "flex",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Quicksand:300,&display=swap");

        html,
        body {
          font-family: "Quicksand", sans-serif;
          font-weight: 300;
          margin: 0;
        }

        html,
        body,
        #__next {
          height: 100%;
        }
      `}</style>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          paddingTop: 0
        }}
      >
        <main
          style={{
            margin: 24
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
