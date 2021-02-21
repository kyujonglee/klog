import React from "react"
import styled, { css } from "styled-components"
import Img from "gatsby-image"
import Layout from "../template/Layout"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { phoneMediaQuery } from "../styles/responsive"
import Stack from "../components/Stack"

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
`
const StackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > button {
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
  }
`

function AboutPage({ data: { image, stacks } }) {
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
            현재 프론트엔드 개발자 프리랜서로 활동하고 있습니다. <br />
            어떤 기술을 사용할 때 그냥 사용하기보다는 그 기술의 원리 등에 대해
            자세히 공부해야 된다고 생각합니다. <br />
            Vanilla JS도 MDN, 스펙 문서를 보면서 꾸준히 공부하려고 합니다.
            객체지향, 함수형 프로그래밍 등을 공부하면서 프레임워크나
            라이브러리의 원리를 알고 쓰려고 노력합니다.
          </Content>
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
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stacks: allStrapiStacks {
      nodes {
        name
        strapiId
      }
    }
  }
`

export default AboutPage
