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
            { href: "/images/4nlw2v6q7d79/7CLki5r92l0KlQjueNNOaF/f63f2365bf5934a2b22d3dbf1f33d7c1/seventa-tc.pdf", text: "Privacy Policy & T&C's" },
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
        <span className="social-links__text"></span>
        <SocialMenu />
      </div>
    </div>
  </footer>
)
