import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
    const image = useStaticQuery(graphql`
        query BrandActivationImage {
            file(relativePath: {eq: "services/brand-activation.jpg"}) {
                childImageSharp {
                    fluid(quality: 95, maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
                name
            }
        }
    `);

    return <Img fluid={image.file.childImageSharp.fluid} alt={image.file.name} className="animated-img" />
}