import axios from "axios";

export const instagramUser = async (username: string) => {
  const url = `https://instagram.com/${username}`;

  const response = await axios.get(url, { params: { __a: 1 } });

  console.log("✅ Got", username);

  const user = response.data?.graphql?.user;

  if (!user) {
    console.log(response.data);
    throw new Error("❌ Graphql User object not returned in API call");
  }

  return user;
};

export const getLatestPostURL = async (username: string) => {
  const user = await instagramUser(username);

  const { edge_owner_to_timeline_media } = user;
  const { count, edges } = edge_owner_to_timeline_media;

  console.log("🔥", username, "has", count, "posts");

  const latestPost = edges.shift();

  const { taken_at_timestamp, shortcode } = latestPost.node;

  console.log(
    "⏰Latest post uploaded at",
    new Date(taken_at_timestamp * 1000).toLocaleString("en-CA", {
      timeZone: "America/Toronto",
    })
  );

  return `https://www.instagram.com/p/${shortcode}`;
};
