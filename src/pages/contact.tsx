import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { FlexBox } from "../components/common"
import Layout from "../template/Layout"
import { formatDateForFile } from "../lib/formatters"

const DOWNLOAD_NAME = `blackbell_portfolio(${formatDateForFile(new Date())})`

function ContactPage({ data }) {
  const {
    portfolio: { nodes },
  } = data
  const {
    file: { publicURL, ext },
  } = nodes[0]

  return (
    <Layout>
      <Wrapper>
        📩 kyujong93@naver.com{" "}
        <PortFolieDownload href={publicURL} download={`${DOWNLOAD_NAME}${ext}`}>
          portfolio download
        </PortFolieDownload>
      </Wrapper>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query {
    portfolio: allStrapiPortfolio {
      nodes {
        file: portfolio_file {
          publicURL
          ext
        }
      }
    }
  }
`

const Wrapper = styled(FlexBox).attrs(() => ({
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}))`
  height: 85vh;
  font-weight: 600;
  font-size: 2rem;
  background-color: white;
  color: ${props => props.theme.colors.purple};
`

const PortFolieDownload = styled.a`
  margin-top: 2rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.red};
  text-decoration: underline;
  &:hover {
    color: ${props => props.theme.colors.black};
  }
`
