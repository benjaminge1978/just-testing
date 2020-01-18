const path = require("path")

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules:
        stage === "build-html"
          ? [
              {
                test: /ScrollMagic/,
                use: loaders.null(),
              },
              {
                test: /scrollmagic-plugin-gsap/,
                use: loaders.null(),
              },
            ]
          : [],
    },
    resolve: {
      alias: {
        TweenLite: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TweenLite.js"
        ),
        TweenMax: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TweenMax.js"
        ),
        TimelineLite: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TimelineLite.js"
        ),
        TimelineMax: path.resolve(
          "node_modules",
          "gsap/src/uncompressed/TimelineMax.js"
        ),
        ScrollMagic: path.resolve(
          "node_modules",
          "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
        ),
        "animation.gsap": path.resolve(
          "node_modules",
          "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
        ),
        "debug.addIndicators": path.resolve(
          "node_modules",
          "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"
        ),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const pagesSlugs = await graphql(`
    query CreatePagesQuery {
      allContentfulCaseCategory {
        nodes {
          slug
          id
        }
      }
      allContentfulCases {
        nodes {
          id
          slug
          caseCategories {
            id
          }
        }
      }
      allContentfulPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (pagesSlugs.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const { createPage } = actions
  const postsPerPage = 6
  const posts = pagesSlugs.data.allContentfulPost.nodes
  const pagesCount = Math.ceil(posts.length / postsPerPage)

  for (let i = 0; i < pagesCount; i++) {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve(`./src/components/blog/blog.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        pagesCount,
        currPage: i + 1,
      },
    })
  }

  posts.forEach((node, index) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/components/blog-post/blog-post.js`),
      context: {
        id: node.id,
        prevPost:
          index !== 0 && posts[index - 1] ? posts[index - 1].slug : null,
        nextPost:
          index !== posts.length - 1 && posts[index + 1]
            ? posts[index + 1].slug
            : null,
      },
    })
  })

  pagesSlugs.data.allContentfulCaseCategory.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(
        `./src/components/case-category/case-category.js`
      ),
      context: {
        id: node.id,
      },
    })
  })

  pagesSlugs.data.allContentfulCases.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/components/case-page/case-page.js`),
      context: {
        id: node.id,
        categoryID: node.caseCategories[0].id,
      },
    })
  })
}
