import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../seo";
import PageHeading from "../page-heading/page-heading";
import Pagination from "./pagination/pagination";
import BlogPostPreview from "./blog-post-preview/blog-post-preview";
import ContainerLabelled from "../container-labelled/container-labelled";
import Arrow from "../../images/arrow-down.svg";

import "./blog.scss";

export default ({data, pageContext}) => {
    const posts = data.allContentfulPost.nodes;

    return (
        <Layout className="blog-page">
            <SEO title="The Seventa Blog"/>
            <PageHeading
                pageName="Blog"
                pageTitle="Stay informed and up to date on all things ‘Events'"
                description="Our blog pieces give you an insight into our world at Seventa, snippets of knowledge from our amazing team, and all of our latest news."
                className="blog-page-heading"
            />
            {
                posts
                ?   <>
                        <ContainerLabelled label={<Arrow />} className="blog-posts-section" innerClassName="blog-page__posts">
                            {
                                posts.map((post, index) => (
                                    <BlogPostPreview
                                        key={index}
                                        title={post.title}
                                        slug={post.slug}
                                        thumb={post.thumbnail}
                                        excerpt={post.excerpt}
                                        date={post.createdAt}
                                    />
                                ))
                            }
                        </ContainerLabelled>
                        <Pagination
                            current={pageContext.currPage}
                            maxPages={pageContext.pagesCount}
                        />
                    </>

                :   <div className="blog-page__no-posts">
                        <h2>Posts not found!</h2>
                    </div>
            }
        </Layout>
    );
}

export const query = graphql`
    query BlogPageQuery($skip: Int = 0, $limit: Int = 1) {
        allContentfulPost(skip: $skip, limit: $limit, sort: {fields: createdAt, order: DESC}) {
            nodes {
                title
                slug
                createdAt(formatString: "DD.MM.YYYY")
                thumbnail {
                    title
                    fluid(maxWidth: 1000, quality: 80) {
                      ...GatsbyContentfulFluid_withWebp_noBase64
                    }
                }
                excerpt
            }
        }
    }
`;