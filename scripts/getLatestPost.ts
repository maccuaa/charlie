import instagramPosts from "./instagram-posts";
import fs from "fs";

const OUTPUT_PATH = "latest.json";
const INSTAGRAM_ACCOUNT = "the.charlie.dood";

const main = async () => {
  console.log("Fetching posts");

  const posts = await instagramPosts(INSTAGRAM_ACCOUNT, { count: 1 });

  if (posts.length === 0) {
    throw new Error("No posts found");
  }

  const post = posts[0];

  console.log("Latest post is", post.url);

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(post, null, 2));

  console.log(`Saved ${OUTPUT_PATH} file.`);
};

main();
