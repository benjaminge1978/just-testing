import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimatedLogo from "../components/home-page/animated-logo/animated-logo"
import ContainerLabelled from "../components/container-labelled/container-labelled"
import Banner from "../components/home-page/banner/banner"
import Promo from "../components/home-page/promo/promo"
import CasesUpdated from "../components/home-page/cases-updated/cases-updated"
import Customers from "../components/home-page/customers/customers"
import Services from "../components/home-page/services/services"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Seventa Events" description="Brand activation. Conferences. Event production. Event management. Venue sourcing" />
      <AnimatedLogo />
      <Banner />
      <Promo />
      <ContainerLabelled
        className="cases-updated-section"
        label={<span className="section-label">Case studies </span>}
      >
        <CasesUpdated data={data} />
      </ContainerLabelled>
      <Services />
      <ContainerLabelled
        className="customers-section"
        label={<span className="section-label">Clients </span>}
      >
        <Customers />
      </ContainerLabelled>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allContentfulHomepageCaseStudy(sort: { fields: createdAt, order: ASC }) {
      edges {
        node {
          slug
          title
          category {
            name
            slug
          }
          image {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
