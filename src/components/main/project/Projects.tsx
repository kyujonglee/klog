import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { css } from "styled-components"
import { Container, FlexBox, SectionTitle } from "../../common"
import { lighten } from "polished"
import ProjectCard from "./ProjectCard"
import ViewMore from "../../common/ViewMore"
import { phoneMediaQuery } from "../../../styles/responsive"

function Projects() {
  const {
    allStrapiProjects: { nodes: projects },
  } = useStaticQuery(query)
  return (
    <Wrapper>
      <SectionTitle color="#63e6be">Projects</SectionTitle>
      <Container>
        <FlexBox justifyContent="flex-end" style={{ margin: "10px" }}>
          <ViewMore text="View All Projects" url={"/projects"} />
        </FlexBox>
      </Container>
      <ProjectContainer>
        {projects.map(project => (
          <ProjectCard project={project} />
        ))}
      </ProjectContainer>
    </Wrapper>
  )
}

export default Projects

export const query = graphql`
  query {
    allStrapiProjects(sort: { order: DESC, fields: startDate }) {
      nodes {
        id
        endDate
        startDate
        subTitle
        title
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

const Wrapper = styled.div`
  min-height: 50vh;
  background-color: ${props => lighten(0.1, props.theme.colors.liteGreen)};
  padding-top: 30px;
  padding-bottom: 30px;
`

const ProjectContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  ${phoneMediaQuery(css`
    grid-template-columns: repeat(1, 1fr);
  `)}
`
