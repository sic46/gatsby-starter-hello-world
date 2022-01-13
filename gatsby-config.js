/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Winston's Recipes",
    description: "Winston's recipe collection",
    author: "Winston Maugeri",
    person: { name: "winston", age: 29 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "john", age: 32 },
      { name: "susan", age: 21 },
    ],
  },
  plugins: [
    // `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages/assets/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
        // Add any options here
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
        // Add any options here
      },
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `kt64b8nliim2`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
