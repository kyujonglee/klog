import React from "react"
import styled, { css } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { phoneMediaQuery } from "../../styles/responsive"

function About() {
  const {
    image,
    site: { nodes },
    introduce: { nodes: introduces },
  } = useStaticQuery(query)
  return (
    <>
      <Container>
        <AboutContent>
          <NameContainer>
            <Line />
            <Name>{nodes[0]?.siteMetadata?.author}</Name>
          </NameContainer>
          <Title>🔥 Web Frontend 개발자.</Title>
          <Content>{introduces[0].content}</Content>
        </AboutContent>
        <AboutImage>
          <GatsbyImage
            style={{ borderRadius: "10px" }}
            image={getImage(image)}
            alt=""
          />
        </AboutImage>
      </Container>
      <Background>
        <div />
      </Background>
    </>
  )
}

const query = graphql`
  query {
    image: file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700)
      }
    }
    site: allSite {
      nodes {
        siteMetadata {
          author
        }
      }
    }
    introduce: allStrapiMainIntroduce {
      nodes {
        content
        strapiId
      }
    }
  }
`

export default About

const Container = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  height: 70vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  ${phoneMediaQuery(css`
    padding-top: 10vh;
    height: 95vh;
  `)}
`
const Background = styled.div`
  width: 100%;
  height: 70vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  & > div:first-child {
    width: 75%;
    height: 100%;
    background: ${props => props.theme.colors.purple};
    opacity: 0.125;
  }
  ${phoneMediaQuery(css`
    display: none;
  `)}
`
const AboutImage = styled.div`
  width: 40%;
  ${phoneMediaQuery(css`
    width: 100%;
  `)}
`
const AboutContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1rem;
  ${phoneMediaQuery(css`
    width: 100%;
  `)}
`
const Title = styled.h2`
  color: ${props => props.theme.colors.title};
  font-weight: 600;
  font-size: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${phoneMediaQuery(css`
    font-size: 2rem;
  `)}
`
const Content = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  ${phoneMediaQuery(css`
    font-size: 1rem;
  `)}
  white-space: pre-wrap;
  line-height: 1.25;
`
const NameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`
const Line = styled.div`
  width: 50px;
  height: 3px;
  background-color: ${props => props.theme.colors.purple};
  margin-right: 1rem;
`
const Name = styled.span`
  color: ${props => props.theme.colors.purple};
  text-transform: capitalize;
  font-size: 1.25rem;
  font-weight: 600;
`
