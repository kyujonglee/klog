import React from "react"
import styled, { css } from "styled-components"

import { FlexBox } from "../components/common"
import Layout from "../template/Layout"
import PortFolioDownload from "../components/PortFolioDownload"
import { phoneMediaQuery } from "../styles/responsive"

function ContactPage() {
  return (
    <Layout>
      <Wrapper>
        📩 kyujong93@naver.com <PortFolioDownload />
      </Wrapper>
    </Layout>
  )
}

export default ContactPage

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
  ${phoneMediaQuery(css`
    font-size: 1.5rem;
  `)}
`
