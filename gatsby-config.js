const config = require('./config')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const queries = require("./src/util/algolia")

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.description,
    author: config.author,
    siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-polished`,
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              // showLineNumbers: true
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
