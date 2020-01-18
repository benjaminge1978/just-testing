import React from "react"
import Fade from "react-reveal/Fade"
import PropsTypes from "prop-types"

import "./section-heading.scss"

const SectionHeading = props => (
  <Fade bottom cascade>
    <div className="section-heading">
      <h3 className="section-heading__name">{props.sectionName}</h3>
      <h2 className="section-heading__title">{props.sectionTitle}</h2>
      {props.children}
    </div>
  </Fade>
)

SectionHeading.propsTypes = {
  sectionTitle: PropsTypes.string.isRequired,
  sectionName: PropsTypes.string.isRequired,
}

export default SectionHeading
