import React, { useRef, useEffect } from "react"
import { Power4 } from "gsap"
import { Tween } from "react-gsap"
import { Controller, Scene } from "react-scrollmagic"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import Arrow from "../../images/case-study-arrow.svg"

import "./case.scss"

const Case = props => {
  let picOverlay = useRef(null)

  useEffect(() => {
    console.log(picOverlay)
  })

  const { index, thumbDesc, title, category, slug, fluidImg } = props
  const itemClasses = index % 2 === 0 ? "left" : "right"
  const caseSlug = `/${slug}`

  return (
    <div
      className={`cases-item cases-item--${itemClasses} cases-item--${index +
        1}`}
    >
      <AniLink
        to={caseSlug}
        className="cases-item__thumb"
        aria-label="case-study-thumb"
      >
        <Controller>
          <Scene
            reverse={true}
            duration={3000}
            offset={-300}
            triggerElement={`.cases-item--${index + 1}`}
          >
            <Tween
              to={{
                opacity: 1,
                scale: 1.2,
              
                transformOrigin: "bottom center",
                ease: "Power4.easeOut",
              }}
              duration={2}
              stagger={0.1}
            >
              <div>
                <Img
                  ref={el => (picOverlay = el)}
                  fluid={fluidImg.fluid}
                  alt={fluidImg.title}
                  className="animated-img"
                />
              </div>
            </Tween>
          </Scene>
        </Controller>
        {thumbDesc ? (
          <span className="cases-item__description">{thumbDesc}</span>
        ) : null}
      </AniLink>
      <Controller>
        <Scene
          reverse={false}
          duration={500}
          offset={0}
          triggerElement={`.cases-item--${index + 1}`}
        >
          <Tween staggerFrom={{ 7: 300, opacity: 1, ease: Power4.easeOut }}>
            <div className="cases-item__heading">
              <span className="case-heading-arrow">
                <Arrow />
              </span>
              <div className="case-heading-text">
                <p>{category}</p>
                <h3>
                  <AniLink
                    className="animated-link"
                    cover
                    to={caseSlug}
                    direction="up"
                    bg="#FFFFFF"
                    aria-label="case-study-thumb"
                  >
                    {title}
                  </AniLink>
                </h3>
              </div>
            </div>
          </Tween>
        </Scene>
      </Controller>
    </div>
  )
}

export default Case
