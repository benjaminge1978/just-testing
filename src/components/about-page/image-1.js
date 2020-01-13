import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
    const imageQuery = useStaticQuery(graphql`
        query Image1 {
            file(relativePath: {eq: "seventa-about-painting.jpg"}) {
                childImageSharp {
                    fluid(webpQuality: 90, jpegQuality: 90, fit: COVER, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
                name
            }
        }
    `);

    if ( imageQuery.errors ) {
        return null;
    }

    return (
        <Img
            fluid={imageQuery.file.childImageSharp.fluid}
            alt={imageQuery.file.name}
            loading="lazy"
            className="animated-img"
        />
    );
};