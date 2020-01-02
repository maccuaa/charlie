const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");
const latestPost = require("./latest.json");

const nextConfig = {
  env: {
    latestPost
  }
};

const hasCSS = withCSS(nextConfig);
const hasOffline = withOffline(hasCSS);

module.exports = hasOffline;
