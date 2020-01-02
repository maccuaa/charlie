import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
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

        #__next {
          // height: 100%;
        }

        #root {
          text-align: center;
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: space-between;
          position: relative;
          justify-content: center;
        }

        @media screen and (min-width: 768px) {
          #wrapper {
            margin: 0 auto;
            max-width: 960px;
            // display: flex;
          }

          main {
            margin: 24px;
          }
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
