import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
    const image = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "services/event-management.jpg"}) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp
                    }

                }
                name
            }
        }
    `);

    return <Img fluid={image.file.childImageSharp.fluid} alt={image.file.name} className="animated-img" />
}