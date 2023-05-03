import "./clients.scss"

import Fade from "react-reveal/Fade"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ClientItem from "./clients-item/clients-item"

export default () => {
  const clients = useStaticQuery(graphql`
    {
      allContentfulCustomers {
        nodes {
          logo {
            title
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `)

  if (!clients.allContentfulCustomers.nodes.length) {
    return null
  }

  return (
    <div className="clients-row">
      {clients.allContentfulCustomers.nodes.map((client, index) => (
        <Fade down key={index} delay={100 * index}>
          <ClientItem logo={client.logo} />
        </Fade>
      ))}
    </div>
  )
}
