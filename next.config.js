const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");

const hasCSS = withCSS();
const hasOffline = withOffline(hasCSS);

module.exports = hasOffline;
