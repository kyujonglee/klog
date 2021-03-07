import React from "react"
import styled from "styled-components"

const SectionTitle = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  padding: 5px;
`
const BottomLine = styled.div`
  width: 50px;
  border-bottom: 5px solid ${props => props.theme.colors.purple};
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
`

export default ({ children, ...rest }) => {
  return (
    <SectionTitle {...rest}>
      {children}
      <BottomLine />
    </SectionTitle>
  )
}
