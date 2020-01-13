import React from 'react'
import socialIcons from "../../../constants/socialIcons"
import './social-menu.scss'

export const socialMenu = () => {
    return (
        <div>
          {socialIcons.map((item, index) => {
            return (
              <a className="socialLink"
                key={index}
                href={item.url}
                target="blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
    )
}

export default socialMenu