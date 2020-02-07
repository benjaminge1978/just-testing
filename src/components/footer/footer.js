import React from "react"

import SocialMenu from "./socialMenu/socialMenu"
import Greybox from "./greybox/greybox"
import ContainerLabelled from "../container-labelled/container-labelled"
import Menu from "../menu/menu"

import "../footer/footer.scss"
import SiteBrandFooter from "../site-brand/site-brand-footer"

export default () => (
  <footer className="site-footer">
    <ContainerLabelled
      className="footer-greybox"
      label={
        <>
          <span className="greybox-lets-talk">Let's talk </span>
          <span className="greybox-site-brand">
            <SiteBrandFooter />
          </span>
        </>
      }
    >
      <Greybox />
    </ContainerLabelled>

    <div className="footer-summary">
      <div className="footer-menu-wrapper">
        <Menu
          id="footer-menu"
          links={[
            { href: "privacy-policy", text: "Privacy Policy & T&C's" },
            { href: "csr", text: "CSR" },
            { href: "cookie-policy", text: "Cookie Policy" },
            {
              href: "https://milkisnice.com",
              text: "Site by MilkIsNice",
              external: true,
            },
          ]}
        />
      </div>
      <div className="social-links">
        <span className="social-links__text">Follow us </span>
        <SocialMenu />
      </div>
    </div>
  </footer>
)
