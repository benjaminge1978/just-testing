import AniLink from "gatsby-plugin-transition-link/AniLink"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import PropsTyps from "prop-types"
import React from "react"

const ClientsShowcaseItem = ({ title, thumbSrc, slug, excerpt, thumb }) => {
  const itemLink = `/${slug}`

  return (
    <Fade bottom cascade distance="70px">
      <div className="case-studies-list-item">
        <>
          <AniLink
            cover
            to={itemLink}
            direction="up"
            bg="#FFFFFF"
            className="case-studies-list-item__thumb"
          >
            <Fade bottom cascade distance="70px">
              <Img
                fluid={thumb.fluid}
                alt={thumb.title}
                className="animated-img"
              />
            </Fade>
          </AniLink>
          <h2 className="case-studies-list-item__title">
            <p to={itemLink} className="animated-title">
              {title}
            </p>
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
