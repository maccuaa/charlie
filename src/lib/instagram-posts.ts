import axios from "axios";
import fs from "fs";

export const INSTAGRAM_ACCOUNT = "the.charlie.dood";

const instagramUser = async () => {
  const url = `https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={"id":"20906864135","first":1}`;

  const response = await axios.get(url, { params: { __a: 1 } });

  console.log("✅ Got", INSTAGRAM_ACCOUNT);

  const user = response.data?.data?.user;

  if (!user) {
    console.error(response.status);
    console.error(response.headers);
    throw new Error("❌ Graphql User object not returned in API call");
  }

  return user;
};

export const getLatestPostURL = async () => {
  const user = await instagramUser();

  // console.log(JSON.stringify(user, null, 2));

  const { edge_owner_to_timeline_media } = user;
  const { count, edges } = edge_owner_to_timeline_media;

  console.log("🔥", INSTAGRAM_ACCOUNT, "has", count, "posts");

  const latestPost = edges.shift();

  const {
    taken_at_timestamp,
    shortcode,
    display_url,
    edge_media_to_caption,
  } = latestPost.node;

  const caption = edge_media_to_caption.edges.shift().node.text;

  console.log(
    "⏰Latest post uploaded at",
    new Date(taken_at_timestamp * 1000).toLocaleString("en-CA", {
      timeZone: "America/Toronto",
    })
  );

  fs.writeFileSync("public/latest.json", JSON.stringify({ shortcode }), {
    encoding: "utf-8",
  });

  console.log("💾 Saved shortcode");

  // console.log(caption);

  return { display_url, shortcode, caption };
};
