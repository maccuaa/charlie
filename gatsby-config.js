module.exports = {
  siteMetadata: {
    title: `Charlie`,
    description: `How old is Charlie? 🐶`,
    author: `Andrew MacCuaig`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `How Old Is Charlie? 🐶`,
        short_name: `Charlie 🐶`,
        start_url: `/`,
        background_color: `##9A382A`,
        theme_color: `##9A382A`,
        display: `minimal-ui`,
        icon: `src/images/paw-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
