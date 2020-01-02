import * as React from "react";
import InstagramEmbed from "react-instagram-embed";

const Posts = () => (
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <InstagramEmbed
        url={process.env.latestPost.url || ""}
        // injectScript={false}
        hideCaption
        maxWidth={320}
      />
    </div>
  </>
);

export default Posts;
