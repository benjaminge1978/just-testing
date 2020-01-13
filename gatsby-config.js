/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Seventa Events | Event Planning & Management Agency`,
    description: `We organise events, and we do them well. We create memorable, rewarding and engaging experiences for our clients’ events. Find out more here.`,
    author: `@gatsbyjs`,
    contactEmail: `info@seventa.co.uk`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4nlw2v6q7d79`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `jsDn84No7gst2-M71hNuSmoXmaHz7s5HdxYiA_Pscb0`,
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
