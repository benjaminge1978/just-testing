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
            <h3>Creating unforgettable experiences and events.</h3>
            <p>
              We are your best-kept secret. A highly passionate and creative
              team, that works behind the scenes to design, plan, create and
              manage your event.
            </p>
          </div>
        </Fade>
      </div>
      <div className="bottomSpacing" />
    </div>
  )
}
