import * as React from "react";
import axios from "axios";
import { Post } from "instagram-posts";

const Posts = () => {
  const [posts, setPosts] = React.useState<Post[] | null>(null);

  React.useEffect(() => {
    const loadPosts = async () => {
      const posts: Post[] = await axios.get("/.netlify/functions/posts");

      setPosts(posts);
    };

    loadPosts();
  }, []);

  if (posts === null) {
    return null;
  }

  console.log(posts);

  return (
    <>
      <style jsx>{``}</style>
    </>
  );
};

export default Posts;
