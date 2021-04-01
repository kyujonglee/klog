import React, { ReactChildren } from "react"
import styled from "styled-components"
import Linkify from "react-linkify"
import { darken } from "polished"

const CustomLinkify = ({ children }: { children: ReactChildren }) => (
  <Linkify
    componentDecorator={(
      decoratedHref: string,
      decoratedText: string,
      key: number
    ) => (
      <SLink href={decoratedHref} key={key} target="_blank">
        {decoratedText}
      </SLink>
    )}
  >
    {children}
  </Linkify>
)

export default CustomLinkify

const SLink = styled.a`
  color: ${props => props.theme.colors.purple};
  &:hover {
    color: ${props => darken(0.2, props.theme.colors.purple)};
  }
`
