import "./case-category.scss"

import Arrow from "../../images/arrow-down.svg"
import CaseItem from "./case-item/case-item"
import ContainerLabelled from "../container-labelled/container-labelled"
import Layout from "../layout"
import PageHeading from "../page-heading/page-heading"
/* eslint-disable react/display-name */
import React from "react"
import SEO from "../seo"
import Testimonial from "./testimonial/testimonial"
import _ from "lodash"
import { graphql } from "gatsby"

export default ({ data }) => {
  const category = data.contentfulCaseCategory
  const testimonial = category.testimonials ? category.testimonials[0] : null

  var cases = _.partition(category.cases, function(caseItem) {
    return caseItem.caseCategories[0].name === category.name
  })

  function reorderItems(items) {
    // Find items by title
    const firstItemIndex = items.findIndex(
      item => item.title === "Tobacco Docks Skylight"
    )
    const lastItemIndex = items.findIndex(
      item => item.title === "Tequila Rose & Lambrini Festival Activation "
    )

    let firstItem, lastItem

    // Move "Tobacco Docks Skylight" to the beginning
    if (firstItemIndex > -1) {
      firstItem = items.splice(firstItemIndex, 1)[0]
    }

    // Adjust the index for "Tequila Rose & Lambrini Festival Activation" if necessary
    const newLastItemIndex =
      lastItemIndex > firstItemIndex && firstItemIndex !== -1
        ? lastItemIndex - 1
        : lastItemIndex

    // Move "Tequila Rose & Lambrini Festival Activation" to the end
    if (newLastItemIndex > -1) {
      lastItem = items.splice(newLastItemIndex, 1)[0]
    }

    // Re-insert the items at the correct positions
    if (firstItem) {
      items.unshift(firstItem)
    }
    if (lastItem) {
      items.push(lastItem)
    }

    return items
  }

  const filteredCases = reorderItems(_.concat(...cases))
  console.log("filteredCases:", filteredCases)

  return (
    <Layout className="case-category">
      <SEO title={category.name} />
      <PageHeading
        pageName={category.name}
        pageTitle={category.categoryTitle}
        description={
          category.childContentfulCaseCategoryDescriptionRichTextNode
            .childContentfulRichText.html
        }
      />
      {category.cases && category.cases.length ? (
        <ContainerLabelled
          label={<Arrow />}
          className="category-page-cases--wrapper"
        >
          <div className="category-page-cases">
            {filteredCases.map((caseItem, index) => (
              <CaseItem
                key={index}
                slug={caseItem.slug}
                thumbnail={caseItem.thumbnail}
                caseTitle={caseItem.title}
                categories={caseItem.caseCategories}
              />
            ))}
          </div>
        </ContainerLabelled>
      ) : null}
      {testimonial ? (
        <ContainerLabelled
          className="testimonial-section"
          label={<span className="testimonial-label">Testimonial </span>}
        >
          <Testimonial
            author={testimonial.author}
            text={
              testimonial.childContentfulTestimonialsTextRichTextNode
                .childContentfulRichText.html
            }
          />
        </ContainerLabelled>
      ) : null}
    </Layout>
  )
}

export const query = graphql`
  query CaseCategoryQuery($id: String) {
    contentfulCaseCategory(
      id: { eq: $id }
      testimonials: { elemMatch: { bindToCategory: { id: { eq: $id } } } }
    ) {
      cases {
        id
        title
        slug
        thumbnail {
          title
          fluid(maxWidth: 1000, quality: 85) {
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
        caseCategories {
          slug
          name
        }
      }
      id
      name
      slug
      categoryTitle
      childContentfulCaseCategoryDescriptionRichTextNode {
        childContentfulRichText {
          html
        }
      }
      testimonials {
        author
        childContentfulTestimonialsTextRichTextNode {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
`
