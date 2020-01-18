/* eslint-disable react/display-name */
import React, { useRef, useEffect } from "react"
import { gsap, TimelineLite, TweenMax, Power3 } from "gsap"
import SplitText from "../../../../gsap/SplitText"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Arrow from "../../../images/arrow-down.svg"
import Video from "../banner/video/video"

import "./banner.scss"

export default () => {
  let app = useRef(null)
  let header = useRef(null)
  let tl = new TimelineLite({ delay: 0.8 })

  useEffect(() => {
    let mySplitText = new SplitText(header, {
      type: "words",
    })
    let words = mySplitText.words

    // Remove Initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } })

    // Header Animation
    tl.staggerFrom(
      words,
      1,
      { opacity: 0, y: 200, ease: Power3.easeOut },
      0.09,
      "=1.2"
    )
  }, [])

  const bannerImage = useStaticQuery(graphql`
    query BannerImage {
      file(relativePath: { eq: "seventa-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
    }
  `)

  return (
    <div className="banner-section" ref={el => (app = el)}>
      <div className="banner-section__left">
        <Arrow />
      </div>
      <div className="banner-section__inner">
        <h1 ref={el => (header = el)} className="banner-text">
          <span>We love experiences.</span>
          <span>We create them.</span>
        </h1>
        <Img
          className="mainBanner"
          fluid={bannerImage.file.childImageSharp.fluid}
          alt={bannerImage.file.childImageSharp.name}
        />
        <Video />
      </div>
    </div>
  )
}

gsap.registerPlugin(TimelineLite)
