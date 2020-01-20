/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: `Seventa Events | Event Planning & Management Agency`,
    description: `We organise events, and we do them well. We create memorable, rewarding and engaging experiences for our clients’ events. Find out more here.`,
    author: `@milkisnice1`,
    contactEmail: `info@seventa.co.uk`,
    twitterUsername: "@seventa",
    image:'/seventa-cover.jpg',
    siteUrl:'https://seventa.co.uk',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4nlw2v6q7d79`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seventa Events | Event Planning & Management Agency`,
        short_name: `Seventa Events`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lexend Deca'],
          display: 'swap'
        }
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
  ],
}
