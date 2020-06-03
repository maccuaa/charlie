import axios from "axios";

export const instagramUser = async (username: string) => {
  // const url = `https://instagram.com/${username}`;
  // const url = "https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables=%7B%22id%22%3A%2220906864135%22%2C%22first%22%3A12%2C%22after%22%3A%22QVFDZTVJRmFpN29HX1FEaXVqVHpEVFhjNXFTQ0I4bjlmUmpnek16MkpORlY3UlRLYmVwYlJuNkluOUpMdnRyWG02T3VPZHJ1MENPNVdnaE1Ha28xN1RCVQ%3D%3D%22%7D"
  const url = `https://www.instagram.com/graphql/query/?query_hash=44efc15d3c13342d02df0b5a9fa3d33f&variables={"id":"20906864135","first":1}`

  const response = await axios.get(url, { params: { __a: 1 } });

  console.log("✅ Got", username);

  const user = response.data?.data?.user;

  if (!user) {
    console.error(response.status);
    console.error(response.headers);
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
