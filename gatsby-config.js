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
    siteUrl: "https://klog.gtsb.io",
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        contentTypes: [`jobs`, `stacks`, `projects`, `blogs`],
        singleTypes: [`main-introduce`, `about-introduce`, `portfolio`],
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
        icons: [
          {
            src: "images/48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "images/72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "images/96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "images/144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "images/192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "images/256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "images/384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "images/512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/about`, `/projects/*`, `/contact`],
      },
    },
  ],
}
