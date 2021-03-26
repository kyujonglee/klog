import React from "react"
import Layout from "../template/Layout"
import { graphql } from "gatsby"
import styled, { css } from "styled-components"
import { Container } from "../components/common"
import { ProjectCardDetail } from "../components/project"
import { phoneMediaQuery } from "../styles/responsive"

function ProjectPage({ data: { allStrapiProjects } }) {
  const { nodes: projects } = allStrapiProjects
  return (
    <Layout>
      <Wrapper>
        <Title>Projects</Title>
        <Line />
        <Projects>
          {projects.map(project => (
            <ProjectCardDetail key={project} project={project} />
          ))}
        </Projects>
      </Wrapper>
    </Layout>
  )
}

export default ProjectPage

export const query = graphql`
  query {
    allStrapiProjects(sort: { order: DESC, fields: startDate }) {
      nodes {
        id
        endDate
        startDate
        subTitle
        title
        stacks {
          name
          id
        }
        image {
          childImageSharp {
            gatsbyImageData(height: 200)
          }
        }
        slug
      }
    }
  }
`

export const Wrapper = styled(Container)`
  min-height: 85vh;
  padding-top: 12vh;
  padding-bottom: 2rem;
`
export const Title = styled.span`
  display: inline-block;
  font-size: 2rem;
  color: ${props => props.theme.colors.darkBlue};
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`
export const Line = styled.div<{ color?: string }>`
  width: 60px;
  height: 4px;
  border-radius: 2px;
  background-color: ${props => props.color ?? "#63e6be"};
  margin-bottom: 1rem;
`
const Projects = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  ${phoneMediaQuery(css`
    grid-template-columns: repeat(1, 1fr);
  `)}
`
