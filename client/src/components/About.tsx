import React from "react"
import styled, { css } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { phoneMediaQuery } from "../styles/responsive"

const Container = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  ${phoneMediaQuery(
    css`
      flex-direction: column-reverse;
      justify-content: flex-end;
      padding-top: 10vh;
    `
  )}
`
const Background = styled.div`
  width: 100%;
  height: 100vh;
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
  ${phoneMediaQuery(
    css`
      display: none;
    `
  )}
`
const AboutImage = styled.div`
  width: 40%;
  ${phoneMediaQuery(
    css`
      width: 100%;
    `
  )}
`
const AboutContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1rem;
  ${phoneMediaQuery(
    css`
      width: 100%;
    `
  )}
`
const Title = styled.h2`
  color: ${props => props.theme.colors.title};
  font-weight: 600;
  font-size: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${phoneMediaQuery(
    css`
      font-size: 2rem;
    `
  )}
`
const Content = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  ${phoneMediaQuery(
    css`
      font-size: 1rem;
    `
  )}
`

function About() {
  const { image } = useStaticQuery(query)
  return (
    <>
      <Container>
        <AboutContent>
          <Title>🔥 Web Frontend 개발자.</Title>
          <Content>공부하는 걸 좋아하며 꾸준히 하려고 합니다</Content>
          <Content>
            긍정적인 성격을 갖고 있으며 다른 사람들과 협업을 잘하는 편입니다{" "}
          </Content>
        </AboutContent>
        <AboutImage>
          <Img
            style={{ borderRadius: "10px" }}
            fluid={image.childImageSharp.fluid}
          />
        </AboutImage>
      </Container>
      <Background>
        <div></div>
      </Background>
    </>
  )
}

const query = graphql`
  query {
    image: file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
