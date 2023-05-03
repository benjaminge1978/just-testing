import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

const ClientItem = ({ logo }) => (
  <div className="client-item">
    <Img
      fluid={logo.fluid}
      alt={logo.title}
      objectFit="contain"
      objectPosition="0% 0%"
      className=""
    />
  </div>
)

ClientItem.propTypes = {
  title: PropTypes.string,
}

export default ClientItem
