import React from "react"
import { graphql } from "gatsby"
import Layout from "../../template/Layout"

function Project({ data }) {
  console.log("project", data)
  return <Layout>goodtogo</Layout>
}

export default Project

export const query = graphql`
  query GetStrapiProject($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
      stacks {
        name
        project
        id
      }
      startDate
      subTitle
      title
    }
  }
`
