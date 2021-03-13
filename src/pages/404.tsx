import React from "react"
import Layout from "../template/Layout"
import styled, { css } from "styled-components"
import { FlexBox } from "../components/common"
import { GoHome } from "../components/common/Waiting"
import { phoneMediaQuery } from "../styles/responsive"

function NotFoundPage() {
  return (
    <Layout>
      <Wrapper>
        <span>🥺 Sorry, Pages Not Found 😇</span>
        <GoHome to="/">🏡 &nbsp;&nbsp;go to home 🏡</GoHome>
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage

const Wrapper = styled(FlexBox).attrs(() => ({
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}))`
  height: 85vh;
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.red};
  ${phoneMediaQuery(css`
    font-size: 1.5rem;
  `)}
`
