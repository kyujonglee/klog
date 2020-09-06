import React from "react"
import styled, { css } from "styled-components"
import Img from "gatsby-image"
import Layout from "../template/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { phoneMediaQuery } from "../styles/responsive"
import Stack from "../components/Stack"
import { stacks } from "../constants/stack"

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
    padding-top: 10vh;
  `)}
`
const AboutImage = styled.div`
  width: 40%;
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
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text};
  display: inline-block;
  margin-bottom: 1rem;
`
const StackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > button:not(:last-child) {
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
  }
`

function AboutPage() {
  const { image } = useStaticQuery(query)
  return (
    <Layout>
      <AboutContainer>
        <AboutImage>
          <Img
            style={{ borderRadius: "10px" }}
            fluid={image.childImageSharp.fluid}
          />
        </AboutImage>
        <AboutContent>
          <Title>about me</Title>
          <Line />
          <Content>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            culpa aliquid minus esse repellendus nihil incidunt sequi facere
            adipisci? Soluta tempora nam, esse odio at ab dolorum autem minima
            blanditiis?
          </Content>
          <StackWrapper>
            {stacks.map(stack => (
              <Stack key={stack.id}>{stack.name}</Stack>
            ))}
          </StackWrapper>
        </AboutContent>
      </AboutContainer>
    </Layout>
  )
}

const query = graphql`
  query {
    image: file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site: allSite {
      nodes {
        siteMetadata {
          author
        }
      }
    }
  }
`

export default AboutPage
