import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";


import './site-brand.scss'
import Logo from '../../images/seventa-light-logo-new.svg'

export default () => (
    <AniLink to="/" className="site-brand" direction="up" bg="#FFFFFF" aria-label="Seventa">
        <Logo style={{
            display: 'block',
            width: '100%',
            height: 'auto',
        }}/>
    </AniLink>
)