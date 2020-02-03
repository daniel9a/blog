// gatsby-config.js

// const myQuery = `{
//     allMarkdownRemark {
//     nodes {
//       frontmatter {
//         author
//         date
//         path
//         tags
//         title
//       }
//       fields {
//         slug
//       }
//       html
//     }
//   }
// }
// `

// const pageQuery = `{
//   pages: allMarkdownRemark(
//     filter: {
//       fileAbsolutePath: { regex: "/pages/" },
//       frontmatter: {purpose: {eq: "page"}}
//     }
//   ) {
//     edges {
//       node {
//         objectID: id
//         frontmatter {
//           title
//           slug
//         }
//         excerpt(pruneLength: 5000)
//       }
//     }
//   }
// }`

const postQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/posts/" } }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          tags
          author
          path
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: postQuery,
    // transformer: ({ data }) => data.allMarkdownRemark.nodes, // optional
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    // indexName: process.env.ALGOLIA_INDEX_NAME,
    settings,
  },
]

module.exports = queries
