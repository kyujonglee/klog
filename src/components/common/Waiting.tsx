import React from "react"
import FlexBox from "./FlexBox"
import styled from "styled-components"
import { Link } from "gatsby"

function Waiting() {
  return (
    <Wrapper>
      준비중입니다... 😅
      <GoHome to="/">🏡 &nbsp;&nbsp;go to home 🏡</GoHome>
    </Wrapper>
  )
}

export default Waiting

const Wrapper = styled(FlexBox).attrs(() => ({
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}))`
  height: 85vh;
  font-weight: 600;
  font-size: 2rem;
  background-color: white;
`
const GoHome = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-top: 2rem;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.purple};
  text-transform: capitalize;
  &:hover {
    color: ${props => props.theme.colors.darkBlue};
  }
`
