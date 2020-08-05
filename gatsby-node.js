const path = require(`path`)
const express= require('express');

 exports.onCreateDevServer=({app})=>{
     app.use(express.static('public'))
 }

// exports.onCreateNode = ({ node, getNode }) => {
//     if (node.internal.type === `MarkdownRemark`) {
//       const fileNode = getNode(node.parent)
//       console.log(fileNode)
//       console.log(`\n`, fileNode.relativePath)
//     }
//   }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark (
            filter: {frontmatter: { templateKey: { eq: "project" } } }
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(node.frontmatter)
        createPage({
            path: `projects/${node.frontmatter.slug}`,
            component: path.resolve(`./src/templates/project-post.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.frontmatter.slug,
            },
        })
    })
}