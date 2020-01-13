import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
    const promoImageQuery = useStaticQuery(graphql`
        query PromoImage {
            file(relativePath: {eq: "seventa-about-us-header-image.jpg"}) {
                childImageSharp {
                    fluid(quality: 90) {
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
        <Img fluid={promoImageQuery.file.childImageSharp.fluid} alt="Promo" loading="lazy" className="animated-img" />
    );
};