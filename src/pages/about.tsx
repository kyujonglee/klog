import React from "react"
import styled, { css } from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../template/Layout"
import { graphql } from "gatsby"
import { phoneMediaQuery } from "../styles/responsive"
import Stack from "../components/Stack"
import SEO from "../components/common/SEO"

function AboutPage({ location, data: { image, stacks, introduce } }) {
  return (
    <Layout>
      <SEO
        url={`${location.pathname}`}
        siteTitle={"About | Klog"}
        title={`about blackbell`}
        description={introduce.nodes[0].content}
      />
      <AboutContainer>
        <AboutImage>
          <GatsbyImage
            style={{ borderRadius: "10px" }}
            image={getImage(image)}
            alt=""
          />
        </AboutImage>
        <AboutContent>
          <Title>about me</Title>
          <Line />
          <Content>{introduce.nodes[0].content}</Content>
          <StackWrapper>
            {stacks.nodes.map(stack => (
              <Stack key={stack.strapiId}>{stack.name}</Stack>
            ))}
          </StackWrapper>
        </AboutContent>
      </AboutContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        gatsbyImageData(width: 800)
      }
    }
    stacks: allStrapiStacks {
      nodes {
        name
        strapiId
      }
    }
    introduce: allStrapiAboutIntroduce {
      nodes {
        content
      }
    }
  }
`

export default AboutPage

const AboutContainer = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 85vh;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  ${phoneMediaQuery(css`
    padding-top: 11vh;
  `)}
`
const AboutImage = styled.div`
  width: 40%;
  margin-bottom: 1rem;
  ${phoneMediaQuery(css`
    width: 100%;
  `)}
`
const Line = styled.div`
  width: 60px;
  height: 4px;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.purple};
  margin-bottom: 1rem;
`
const AboutContent = styled.div`
  width: 50%;
  ${phoneMediaQuery(css`
    width: 100%;
  `)}
`
const Title = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.darkBlue};
  text-transform: capitalize;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`
const Content = styled.span`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.text};
  display: inline-block;
  margin-bottom: 1rem;
  line-height: 1.5;
  white-space: pre-wrap;
`
const StackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > button {
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
  }
`
