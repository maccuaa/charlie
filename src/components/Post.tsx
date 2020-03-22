import * as React from "react";
import InstagramEmbed from "react-instagram-embed";
import { Post } from "../lib/instagram-posts";

interface Props {
  post: Post;
}

const Posts = ({ post }: Props) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: 16,
    }}
  >
    <InstagramEmbed url={post.url} hideCaption maxWidth={320} />
  </div>
);

export default Posts;
