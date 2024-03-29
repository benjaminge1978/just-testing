import AniLink from "gatsby-plugin-transition-link/AniLink"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import PropsTyps from "prop-types"
import React from "react"

const CaseStudiesItem = ({ title, thumbSrc, slug, excerpt, thumb }) => {
  const itemLink = `/${slug}`

  return (
    <Fade bottom cascade distance="70px">
      <div className="case-studies-list-item">
        {itemLink === "/innovative-hire" ? (
          <>
            <a
              href="https://innovativehire.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="case-studies-list-item__thumb"
            >
              <Fade bottom cascade distance="70px">
                <Img
                  fluid={thumb.fluid}
                  alt={thumb.title}
                  className="animated-img"
                />
              </Fade>
            </a>
            <h2 className="case-studies-list-item__title">
              <a
                href="https://innovativehire.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-link"
              >
                {title}
              </a>
            </h2>
            <div
              className="case-studies-list-item__excerpt"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <AniLink cover to={itemLink} direction="up" bg="#FFFFFF"></AniLink>
          </>
        ) : (
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
              <AniLink to={itemLink} className="animated-link">
                {title}
              </AniLink>
            </h2>
            <div
              className="case-studies-list-item__excerpt"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <AniLink cover to={itemLink} direction="up" bg="#FFFFFF"></AniLink>
          </>
        )}
      </div>
    </Fade>
  )
}

CaseStudiesItem.porpsTypes = {
  title: PropsTyps.string.isRequired,
  thumbSrc: PropsTyps.string.isRequired,
  thumb: PropsTyps.string.isRequired,
  excerpt: PropsTyps.string.isRequired,
  slug: PropsTyps.string.isRequired,
}

export default CaseStudiesItem
