import AniLink from "gatsby-plugin-transition-link/AniLink"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import PropsTypes from "prop-types"
import React from "react"

const BlogPostPreview = ({ title, excerpt, thumb, date, slug }) => {
  return (
    <Fade bottom cascade distance="70px">
      <div className="blog-post-preview">
        <AniLink
          cover
          to={`/blog/${slug}`}
          direction="up"
          bg="#FFFFFF"
          className="blog-post-preview__thumb"
        >
          <Fade bottom cascade distance="70px">
            <Img
              fluid={thumb.fluid}
              alt={thumb.title}
              className="animated-img"
            />
          </Fade>
        </AniLink>

        <h2 className="blog-post-preview__title">
          <AniLink to={`/blog/${slug}`} className="animated-link">
            {title}
          </AniLink>
        </h2>
        <p className="blog-post-preview__excerpt">{excerpt}</p>
      </div>
    </Fade>
  )
}

BlogPostPreview.propTypes = {
  title: PropsTypes.string.isRequired,
  excerpt: PropsTypes.string.isRequired,
  thumb: PropsTypes.object.isRequired,
  date: PropsTypes.string.isRequired,
  slug: PropsTypes.string.isRequired,
}

export default BlogPostPreview
