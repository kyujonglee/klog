import React from "react"
import styled, { css } from "styled-components"
import SocialLinks from "./SocialLinks"
import { graphql, useStaticQuery } from "gatsby"
import { phoneMediaQuery } from "../styles/responsive"

function Footer() {
  const {
    site: { nodes },
  } = useStaticQuery(query)
  
  return (
    <Container>
      <SocialLinks />
      <Text>
        Copyright©2021 <SiteTitle>{nodes[0]?.siteMetadata?.title}</SiteTitle>{" "}
        all right reserved
      </Text>
    </Container>
  )
}

const query = graphql`
  query {
    site: allSite {
      nodes {
        siteMetadata {
          title
        }
      }
    }
  }
`

export default Footer

const Container = styled.footer`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${props => props.theme.colors.gray};
`
const Text = styled.span`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  letter-spacing: 2px;
  text-align: center;
  ${phoneMediaQuery(css`
    font-size: 1rem;
  `)}
`
const SiteTitle = styled.b`
  color: ${props => props.theme.colors.blue};
`
