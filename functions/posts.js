const instagramPosts = require("instagram-posts");

exports.handler = async event => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  console.log("Fetching posts...");

  const posts = await instagramPosts("the.charlie.dood");

  console.log("Successfully got posts");

  return {
    statusCode: 200,
    body: JSON.stringify(posts)
  };
};
