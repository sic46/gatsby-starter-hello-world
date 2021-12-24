/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
   siteMetadata: {
    title: "Winston's Recipes",
    description: "A collection of my own recipes",
    author: "@Winston",
 
    ],
  },
  
  plugins: [
  `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
