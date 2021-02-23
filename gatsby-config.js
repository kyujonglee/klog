const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(
  `Using environment config: '${activeEnv}', API_URL: ${process.env.GATSBY_API_URL}`
)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: "Klog(blackbell)",
    author: "blackbell",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Roboto`, `Open Sans`],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL || "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `stacks`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Klog (blackbell)`,
        short_name: `klog`,
        start_url: `/`,
        background_color: `#6C4EF4`,
        theme_color: `#F7F6F7`,
        display: `standalone`,
        icon: `src/images/blackbell.png`,
      },
    },
  ],
}
