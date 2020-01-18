import React, { useRef, useEffect } from "react"
import { TimelineLite, TweenMax, Power3 } from "gsap"
import SplitText from "../../../gsap/SplitText"
import PropsTypes from "prop-types"

import "./page-heading.scss"

const PageHeading = props => {
  let app = useRef(null)
  let header = useRef(null)
  let tl = new TimelineLite({ delay: 0.4 })

  useEffect(() => {
    let mySplitText = new SplitText(header, {
      type: "words",
    })
    let words = mySplitText.words

    // Remove Initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } })

    // Header Animation
    tl.staggerFrom(words, 1, { opacity: 0, y: 40, ease: Power3.easeOut }, 0.002)
  }, [])

  const className =
    "page-heading" +
    ("undefined" !== typeof props.className ? ` ${props.className}` : "")

  return (
    <div className={className} ref={el => (app = el)}>
      <div className="page-heading__inner" ref={el => (header = el)}>
        <h3 className="page-heading__name">{props.pageName}</h3>
        <h1 className="page-heading__title">{props.pageTitle}</h1>
        {props.description ? (
          <div
            className="page-heading__description"
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        ) : null}
        {props.children}
      </div>
    </div>
  )
}

PageHeading.propsTypes = {
  pageName: PropsTypes.string.isRequired,
  pageTitle: PropsTypes.string.isRequired,
  description: PropsTypes.string,
}

export default PageHeading
