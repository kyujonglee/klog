const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectResults = await graphql(`
    query {
      allStrapiProjects(sort: { order: DESC, fields: startDate }) {
        nodes {
          strapiId
          slug
        }
      }
    }
  `)
  projectResults.data.allStrapiProjects.nodes.forEach(({ slug }) => {
    createPage({
      path: `projects/${slug}`,
      component: path.resolve("./src/components/project/Project.tsx"),
      context: {
        slug,
      },
    })
  })

  const blogResults = await graphql(`
    query {
      blogs: allStrapiBlogs(sort: { fields: published_at, order: DESC }) {
        nodes {
          published_at(formatString: "yyyy-MM-DD")
          slug
          tags {
            id
            name
          }
          title
          content
          id
        }
      }
    }
  `)
  blogResults.data.blogs.nodes.forEach(({ slug }) => {
    createPage({
      path: `blogs/${slug}`,
      component: path.resolve("./src/components/blog/Blog.tsx"),
      context: {
        slug,
      },
    })
  })
}
