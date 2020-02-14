import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        siteImage: image
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description, slug, image }) => {
  const { site } = useStaticQuery(getData);

  const {
    siteDesc,
    siteTitle,
    siteUrl,
    siteImage,
    twitterUsername
  } = site.siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={siteImage} />
      {/* facebook cards */}
      <meta property="og:url" content={`${siteUrl}/blog/${slug}` || siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDesc} />
      <meta property="og:image" content={`${siteUrl}${siteImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${siteImage}`} />i
    </Helmet>
  );
};

export default SEO;
