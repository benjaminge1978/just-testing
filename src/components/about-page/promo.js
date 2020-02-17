import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
    const promoImageQuery = useStaticQuery(graphql`
        query PromoImage {
            file(relativePath: {eq: "seventa-about-paint.jpg"}) {
                childImageSharp {
                    fluid(webpQuality: 75, jpegQuality: 75, maxWidth: 2000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    if ( promoImageQuery.errors ) {
        return null;
    }

    return (
        <Img fluid={promoImageQuery.file.childImageSharp.fluid} alt="Promo" loading="lazy" className="" />
    );
};