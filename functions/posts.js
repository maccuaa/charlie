const instagramPosts = require("instagram-posts");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const promise = new Promise(async (resolve, reject) => {
    try {
      const posts = await instagramPosts("the.charlie.dood", { count: 10 });
      resolve({
        statusCode: 200,
        body: JSON.stringify(posts)
      });
    } catch (e) {
      reject({
        statusCode: 500,
        body: e
      });
    }
  });

  return promise;
};
