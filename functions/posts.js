const instagramPosts = require("instagram-posts");

exports.handler = event => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const promise = new Promise(async (resolve, reject) => {
    try {
      console.log("Fetching posts...");

      const posts = await instagramPosts("the.charlie.dood");

      console.log("Successfully got posts");

      resolve({
        statusCode: 200,
        body: JSON.stringify(posts)
      });
    } catch (e) {
      console.log("Failed to get posts", e);
      reject({
        statusCode: 500,
        body: e
      });
    }
  });

  return promise;
};
