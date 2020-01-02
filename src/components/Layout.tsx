import React from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="root">
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Quicksand:300,&display=swap");

        html,
        body {
          font-family: "Quicksand", sans-serif;
          font-weight: 300;
          margin: 0;
          background-color: #9a382a;
        }

        html,
        body,
        #__next {
          height: 100%;
        }

        #root {
          color: #fff;
          height: 100%;
          display: flex;
          align-items: center;
          text-align: center;
        }

        #wrapper {
          margin: 0 auto;
          max-width: 960px;
        }

        main {
          margin: 24px;
        }

        a {
          color: inherit;
        }
      `}</style>
      <div id="wrapper">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
