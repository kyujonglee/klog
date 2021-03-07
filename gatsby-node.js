const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStrapiProjects(sort: { order: DESC, fields: startDate }) {
        nodes {
          strapiId
          slug
        }
      }
    }
  `)
  result.data.allStrapiProjects.nodes.forEach(({ slug }) => {
    createPage({
      path: `projects/${slug}`,
      component: path.resolve("./src/components/project/Project.tsx"),
      context: {
        slug,
      },
    })
  })
}
