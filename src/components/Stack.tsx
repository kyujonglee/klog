import React from "react"
import styled from "styled-components"

const Button = styled.button`
  padding: 0.4rem 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.orange};
  background-color: ${props => props.theme.colors.lightOrange};
  border-radius: 3px;
  text-transform: uppercase;
  border: none;
  font-size: 1.125rem;
`

function Stack({ children }) {
  return <Button>{children}</Button>
}

export default Stack
