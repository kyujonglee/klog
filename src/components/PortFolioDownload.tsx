import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { isProduction } from "../constants/common"
import { formatDateForFile } from "../lib/formatters"

const DOWNLOAD_NAME = `blackbell_portfolio(${formatDateForFile(new Date())})`

function PortFolioDownload() {
  const data = useStaticQuery(query())
  const {
    portfolio: { nodes },
  } = data

  return (
    <PortFolieDownload
      href={isProduction ? nodes[0]?.file?.url : nodes[0]?.file?.publicURL}
      download={`${DOWNLOAD_NAME}${nodes?.[0]?.file?.ext}`}
    >
      portfolio download
    </PortFolieDownload>
  )
}

export default PortFolioDownload

const productionQuery = graphql`
  query {
    portfolio: allStrapiPortfolio {
      nodes {
        file: portfolio_file {
          url
          ext
        }
      }
    }
  }
`

const localQuery = graphql`
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

const query = () => (isProduction ? productionQuery : localQuery)

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
