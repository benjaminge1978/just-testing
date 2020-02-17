import React from "react"
import Fade from "react-reveal/Fade"
import PropsTypes from "prop-types"
import Img from "gatsby-image"
import Arrow from "../../../images/case-study-arrow.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./case-item.scss"

const CaseItem = ({ slug, categories, caseTitle, thumbnail }) => (
  <Fade bottom cascade distance="70px">
    <div className="case-category__item">
      <AniLink
        cover
        to={`/${slug}`}
        direction="up"
        bg="#FFFFFF"
        aria-label={caseTitle}
      >
        <Img
          fluid={thumbnail.fluid}
          alt={thumbnail.title}
          className="animated-img"
        />
      </AniLink>
      <div className="case-category-item-desc">
        <Arrow />
        <div className="case-category-item-heading">
          {categories ? (
            <p>
              {categories
                .map(category => category.name.toLowerCase())
                .join(" & ")}
            </p>
          ) : null}
          <h2>
            <AniLink
              className="animated-link"
              cover
              to={`/${slug}`}
              direction="up"
              bg="#FFFFFF"
            >
              {caseTitle}
            </AniLink>
          </h2>
        </div>
      </div>
    </div>
  </Fade>
)

CaseItem.propTypes = {
  slug: PropsTypes.string.isRequired,
  thumbnail: PropsTypes.object.isRequired,
  caseTitle: PropsTypes.string.isRequired,
  categories: PropsTypes.array.isRequired,
}

export default CaseItem
