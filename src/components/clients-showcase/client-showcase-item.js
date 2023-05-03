import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import PropsTyps from "prop-types"
import React from "react"

const ClientsShowcaseItem = ({ title, logo, video, thumb }) => {
  return (
    <Fade bottom cascade distance="70px">
      <div className="case-studies-list-item">
        <>
          <div className="case-studies-list-item__thumb">
            <Fade bottom cascade distance="70px">
              <Img
                fluid={thumb.fluid}
                alt={title}
                className="animated-img-clients"
              />
            </Fade>
            <Fade bottom cascade distance="70px" delay={200}>
              <div className="case-studies-list-item__logo_wrapper">
                <img
                  src={logo.file.url}
                  alt={title}
                  className="case-studies-list-item__logo"
                />
              </div>
            </Fade>
            <Fade bottom cascade distance="70px" delay={320}>
              <div className="case-studies-list-item__play_wrapper">
                <img
                  src="/play.png"
                  alt={title}
                  className="case-studies-list-item__play"
                />
              </div>
            </Fade>
          </div>
          <h2 className="case-studies-list-item__title">
            <p className="animated-title">{title}</p>
          </h2>
        </>
      </div>
    </Fade>
  )
}

ClientsShowcaseItem.porpsTypes = {
  title: PropsTyps.string.isRequired,
  thumbSrc: PropsTyps.string.isRequired,
  thumb: PropsTyps.string.isRequired,
  excerpt: PropsTyps.string.isRequired,
}

export default ClientsShowcaseItem
