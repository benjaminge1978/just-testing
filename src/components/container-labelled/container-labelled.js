import "./container-labelled.scss"

import Fade from "react-reveal/Fade"
import PropsTypes from "prop-types"
import React from "react"

const ContainerLabelled = props => (
  <>
    {props.title && (
      <Fade bottom delay={100}>
        <h2 className="container-title">{props.title}</h2>
      </Fade>
    )}

    <div
      className={
        "container-labelled" + (props.className ? ` ${props.className}` : "")
      }
    >
      <div
        className={
          "container-labelled__label" +
          (props.labelClassName ? ` ${props.labelClassName}` : "")
        }
      >
        {props.label}
      </div>
      <div
        className={
          "container-labelled__inner" +
          (props.innerClassName ? ` ${props.innerClassName}` : "")
        }
      >
        {props.children}
      </div>
    </div>
  </>
)

ContainerLabelled.propsTypes = {
  label: PropsTypes.string,
  innerClassName: PropsTypes.string,
  labelClassName: PropsTypes.string,
}

ContainerLabelled.defaultProps = {
  label: null,
}

export default ContainerLabelled
