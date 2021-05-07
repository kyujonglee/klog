import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { formatDateForFile } from "../lib/formatters"

const DOWNLOAD_NAME = `blackbell_portfolio(${formatDateForFile(new Date())})`

function PortFolioDownload() {
  const data = useStaticQuery(query)
  const {
    portfolio: { nodes },
  } = data
  const {
    portfolio_file: { url, publicURL, ext },
  } = nodes[0]

  return (
    <PortFolieDownload
      href={publicURL || url}
      download={`${DOWNLOAD_NAME}${ext}`}
    >
      portfolio download
    </PortFolieDownload>
  )
}

export default PortFolioDownload

const query = graphql`
  query {
    portfolio: allStrapiPortfolio {
      nodes {
        portfolio_file {
          url
          ext
          publicURL
        }
      }
    }
  }
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
