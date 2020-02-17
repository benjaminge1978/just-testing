import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
    const imageQuery = useStaticQuery(graphql`
        query Image1 {
            file(relativePath: {eq: "seventa-about-painting.jpg"}) {
                childImageSharp {
                    fluid(webpQuality: 75, jpegQuality: 75, fit: COVER, maxWidth: 1800) {
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
            className=""
        />
    );
};