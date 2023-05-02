import "./scss/about.scss"

import React from "react"

import Arrow from "../images/arrow-down.svg"
import Clients from "../components/home-page/clients/clients"
import ContainerLabelled from "../components/container-labelled/container-labelled"
import Image1 from "../components/about-page/image-1"
import Image2 from "../components/about-page/image-2"
import Layout from "../components/layout"
import LongDashText from "../components/long-dash-text/long-dash-text"
import PageHeading from "../components/page-heading/page-heading"
import PromoImage from "../components/about-page/promo"
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
      />
      <ContainerLabelled
        className="clients-section"
        label={<span className="section-label">Clients </span>}
      >
        <Clients />
      </ContainerLabelled>
    </Layout>
  )
}
