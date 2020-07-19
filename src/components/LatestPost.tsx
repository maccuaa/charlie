import * as React from "react";
import InstagramEmbed from "react-instagram-embed";

interface Props {
  url: string;
}

const Posts = ({ url }: Props) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: 16,
    }}
  >
    <InstagramEmbed url={url} hideCaption maxWidth={320} />
  </div>
);

export default Posts;
