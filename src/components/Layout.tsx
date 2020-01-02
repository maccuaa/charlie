import React from "react";

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
          height: 100%;
        }

        #__next {
          height: 100%;
        }

        #root {
          color: #fff;
          display: flex;
          align-items: center;
          height: 100%;
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
