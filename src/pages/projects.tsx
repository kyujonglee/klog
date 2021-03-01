import React from "react"
import Layout from "../template/Layout"
import { graphql } from "gatsby"

function ProjectPage({ data: { allStrapiProjects } }) {
  const { nodes: projects } = allStrapiProjects
  return <Layout>projects</Layout>
}

export default ProjectPage

export const query = graphql`
  query {
    allStrapiProjects(sort: { order: DESC, fields: startDate }) {
      nodes {
        startDate
        stacks {
          name
          id
        }
        subTitle
        title
      }
    }
  }
`
