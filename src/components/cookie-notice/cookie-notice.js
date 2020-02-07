import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import CookieConsent, { Cookies } from "react-cookie-consent"
import "./cookie-notice.scss"

const CookieNotice = () => {
  const setCookie = () => {
    Cookies.set("gatsby-gdpr-google-analytics", "true", { expires: 365 })
    Cookies.set("gatsby-gdpr-facebook-pixel", "true", { expires: 365 })
  }

  return (
    <section className="container-cookie">
      <CookieConsent
        location="bottom"
        buttonText="Okay"
        declineButtonText="Decline"
        onAccept={() => setCookie()}
        containerClasses="container"
        contentClasses="content"
        buttonClasses="button"
      >
        <div>
          By using our website you consent to all cookies in accordance with our
          Cookie Policy.
        </div>
        <AniLink className="read-more" to="/policy">
          Read More
        </AniLink>
      </CookieConsent>
    </section>
  )
}

export default CookieNotice
