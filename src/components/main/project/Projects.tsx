import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { css } from "styled-components"
import { Container, FlexBox, SectionTitle } from "../../common"
import { lighten } from "polished"
import ProjectCard from "./ProjectCard"
import ViewMore from "../../common/ViewMore"
import { phoneMediaQuery } from "../../../styles/responsive"
import useScrollFadeIn from "../../../hooks/useScrollFadeIn"

function* createFadeOptions() {
  let delay = 0.2,
    count = 0,
    interval = 0.2

  const direction = "left"

  while (true)
    yield {
      delay: delay + count++ * interval,
      direction,
    }

  // just for type
  return {
    delay,
    direction,
  }
}

const options = createFadeOptions()

function Projects() {
  const {
    allStrapiProjects: { nodes: projects },
  } = useStaticQuery(query)
  const projectFirstElement = useScrollFadeIn<HTMLDivElement>(
    options.next().value
  )
  const projectSecondElement = useScrollFadeIn<HTMLDivElement>(
    options.next().value
  )
  const projectThirdElement = useScrollFadeIn<HTMLDivElement>(
    options.next().value
  )

  const projectElement = [
    projectFirstElement,
    projectSecondElement,
    projectThirdElement,
  ]

  return (
    <Wrapper>
      <SectionTitle color="#63e6be">Projects</SectionTitle>
      <Container>
        <FlexBox justifyContent="flex-end" style={{ margin: "10px" }}>
          <ViewMore text="View All Projects" url={"/projects"} />
        </FlexBox>
      </Container>
      <ProjectContainer>
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            {...projectElement[index]}
          />
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
          localFile {
            childImageSharp {
              gatsbyImageData(height: 200)
            }
            publicURL
          }
        }
        slug
      }
    }
  }
`

const Wrapper = styled.div`
  min-height: 50vh;
  background-color: ${props => lighten(0.1, props.theme.colors.lightGreen)};
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const ProjectContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  ${phoneMediaQuery(css`
    grid-template-columns: repeat(1, minmax(260px, 400px));
    justify-content: center;
    padding: 0.5rem;
  `)}
`
