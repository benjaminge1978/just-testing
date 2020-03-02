/* eslint-disable react/display-name */
import React from "react"
import Fade from "react-reveal/Fade"
import "./promo.scss"

export default () => {
  return (
    <div>
      <div id="scrollStarts" className="promo-section">
        <Fade bottom cascade>
          <div className="promo-section__inner">
            <h3>We help brands and clients create awesome events. </h3>
            <p>
            Our team are experts. We’ve worked on all manner of events for global brands and companies. We know our purpose and we deliver results. 

            </p>
          </div>
        </Fade>
      </div>
      <div className="bottomSpacing" />
    </div>
  )
}
