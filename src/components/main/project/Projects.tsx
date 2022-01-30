import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { css } from "styled-components"
import { Container, FlexBox, SectionTitle } from "../../common"
import { lighten } from "polished"
import ProjectCard from "./ProjectCard"
import ViewMore from "../../common/ViewMore"
import { phoneMediaQuery } from "../../../styles/responsive"
import { motion } from "framer-motion"

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
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <ProjectCard key={project.id} project={project} />
          </motion.div>
        ))}
      </ProjectContainer>
    </Wrapper>
  )
}

export default Projects

export const query = graphql`
  query {
    allStrapiProjects(sort: { order: DESC, fields: startDate }, limit: 3) {
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
