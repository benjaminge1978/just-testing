import "./scss/case-studies.scss"

import React from "react"

import Arrow from "../images/arrow-down.svg"
import Clients from "../components/clients/clients"
import ClientsShowcaseItem from "../components/clients-showcase/client-showcase-item"
import ContainerLabelled from "../components/container-labelled/container-labelled"
import Layout from "../components/layout"
import PageHeading from "../components/page-heading/page-heading"
import SEO from "../components/seo"

export default ({ data }) => {
  const clientsShowcases = data.allContentfulClientsShowcase.edges

  return (
    <Layout>
      <SEO
        title="Clients"
        description="Seventa Events are trusted by the best..."
      />
      <PageHeading
        pageName="Our Clients"
        pageTitle="Seventa Events are trusted by the best..."
        description="As one of the UK’s leading events teams, we are delighted to have worked with a multitude of international clients. Working across multiple projects, we have created and delivered award-winning events for:"
      >
        <Clients />
      </PageHeading>
      <ContainerLabelled label={<Arrow />} className="case-studies-section">
        <div className="case-studies-list">
          {clientsShowcases.map(showcase => {
            const {
              id,
              clientsLogo,
              clientsName,
              clientsVideo,
              videoPlaceholderImage,
            } = showcase.node

            return (
              <div className="case-studies-category" key={id}>
                <ClientsShowcaseItem
                  title={clientsName}
                  thumb={videoPlaceholderImage}
                  logo={clientsLogo}
                  video={clientsVideo}
                />
              </div>
            )
          })}
        </div>
      </ContainerLabelled>
    </Layout>
  )
}

export const query = graphql`
  query ClientsShowcase {
    allContentfulClientsShowcase {
      edges {
        node {
          id
          clientsName
          videoPlaceholderImage {
            fluid(quality: 100, maxWidth: 1200) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          clientsVideo {
            file {
              url
            }
          }
          clientsLogo {
            fluid(quality: 100, maxWidth: 300) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
