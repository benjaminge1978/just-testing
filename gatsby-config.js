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
    title: `Event Planning & Management Agency`,
    description: `We create memorable, rewarding and engaging experiences for our clients’ events.`,
    author: `@milkisnice1`,
    contactEmail: `hello@seventa.co.uk`,
    twitterUsername: "@SeventaEvents",
    image: "/seventa-cover.jpg",
    siteUrl: "https://seventa.netlify.com",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-107505363-1",
          // Setting this parameter is optional
          anonymize: true,
        },
        facebookPixel: {
          pixelId: "810638596071143",
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
          navigateFallbackWhitelist: [/\/$/],
      }
  },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lexend Deca"],
          display: "swap",
        },
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://seventa.co.uk",
        sitemap: "https://seventa.co.uk/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://seventa.co.uk`,
        stripQueryString: true,
      },
    },
  ],
}
