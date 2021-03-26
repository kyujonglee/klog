import React from "react"
import { graphql, Link } from "gatsby"
import styled, { css } from "styled-components"
import { BiLeftArrowAlt } from "react-icons/bi"
import { lighten } from "polished"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../../template/Layout"
import { Container, FlexBox } from "../common"
import { Line, Title } from "../../pages/projects"
import { phoneMediaQuery } from "../../styles/responsive"
import DefaultImage from "../common/DefaultImage"
import SDate from "../common/SDate"

function Project({ data }) {
  const {
    project: { title, subTitle, image, stacks, endDate, startDate, desc },
  } = data
  return (
    <Layout>
      <Wrapper>
        <FlexBox>
          <PrevButton to="/projects">
            <BiLeftArrowAlt size="26" color="#6C4EF4" />
          </PrevButton>
          <div>
            <Title>project</Title>
            <Line />
          </div>
        </FlexBox>
        <Main>
          <Column>
            <Content>
              <ProjectTitle>🔍 {title}</ProjectTitle>
              <ProjectSubTitle>{subTitle}</ProjectSubTitle>
              <SDate
                startDate={startDate}
                endDate={endDate}
                fontSize="1rem"
                style={{ marginBottom: "0.5rem" }}
              />
              {desc.map(({ id, content }) => (
                <DescContent key={id}>{content}</DescContent>
              ))}
              <FlexBox style={{ marginTop: "0.5rem" }} flexWrap="wrap">
                {stacks.map(stack => (
                  <Stack key={stack.id}>{stack.name}</Stack>
                ))}
              </FlexBox>
            </Content>
          </Column>
          <Column style={{ textAlign: "center" }}>
            {image ? (
              <GatsbyImage image={getImage(image)} alt="" />
            ) : (
              <DefaultImage
                style={{
                  backgroundColor: "#f3f0ff",
                  height: "200px",
                  borderRadius: "1rem",
                }}
              />
            )}
          </Column>
        </Main>
      </Wrapper>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query GetStrapiProject($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
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
          gatsbyImageData(height: 400)
        }
      }
      desc {
        content
        id
      }
    }
  }
`

const Wrapper = styled(Container)`
  min-height: 85vh;
  padding-top: 12vh;
  padding-bottom: 2rem;
`
const PrevButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  margin-right: 6px;

  &:hover {
    background-color: ${props => lighten(0.6, props.theme.colors.gray)};
  }
`
const Main = styled.main`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1rem;
  ${phoneMediaQuery(css`
    grid-template-columns: 1fr;
    grid-auto-flow: reverse;
  `)}
`
const Column = styled.div`
  ${phoneMediaQuery(css`
    &:first-child {
      order: 2;
    }
  `)}
`
const Content = styled.section`
  padding: 1rem;
  ${phoneMediaQuery(css`
    padding: 0.5rem;
  `)}
`
const ProjectTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
`
const ProjectSubTitle = styled.h5`
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.text};
  font-size: 1.125rem;
`
const Stack = styled.li`
  padding: 6px 12px;
  color: ${props => props.theme.colors.red};
  background-color: ${props => lighten(0.4, props.theme.colors.red)};
  border-radius: 6px;
  margin-right: 6px;
  margin-bottom: 6px;
`
const DescContent = styled(FlexBox).attrs(() => ({
  alignItems: "center",
}))`
  display: inline-block;
  color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.liteBlue};
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  margin-bottom: 6px;
  margin-right: 6px;
  font-size: 0.875rem;
  word-break: break-all;
  line-height: 1.25;
  white-space: pre-wrap;
`
