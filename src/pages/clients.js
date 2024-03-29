import "./scss/clients.scss"

import Fade from "react-reveal/Fade"
import React from "react"

import Arrow from "../images/arrow-down.svg"
import Clients from "../components/clients/clients"
import ClientsShowcaseItem from "../components/clients-showcase/client-showcase-item"
import ContainerLabelled from "../components/container-labelled/container-labelled"
import Layout from "../components/layout"
import LongDashText from "../components/long-dash-text/long-dash-text"
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
      <ContainerLabelled
        label={<Arrow />}
        className="case-studies-section"
        title="Don’t just take our word for it, our testimonials speak for themselves..."
      >
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
          <Fade bottom delay={100}>
            <div className="case-studies-help">
              <LongDashText>
                <p>
                  Need help planning your next event, activation or conference?
                </p>
                <p>
                  Let us help take it to the next level on{" "}
                  <a href="mailto: hello@seventa.co.uk">hello@seventa.co.uk</a>
                </p>
              </LongDashText>
            </div>
          </Fade>
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
            file {
              url
            }
          }
        }
      }
    }
  }
`
