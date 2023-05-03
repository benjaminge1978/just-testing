import "./scss/case-studies.scss"

import React from "react"

import Arrow from "../images/arrow-down.svg"
import Clients from "../components/clients/clients"
import ContainerLabelled from "../components/container-labelled/container-labelled"
import Layout from "../components/layout"
import PageHeading from "../components/page-heading/page-heading"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout className="about-page-layout">
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
        <div className="case-studies-list"></div>
      </ContainerLabelled>
    </Layout>
  )
}
