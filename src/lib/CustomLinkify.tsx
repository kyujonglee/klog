import React, { ReactChildren } from "react"
import styled, { DefaultTheme } from "styled-components"
import Linkify from "react-linkify"
import { darken } from "polished"

type TCustomLinkify = {
  children: ReactChildren
  linkColor?: keyof DefaultTheme["colors"]
}

const CustomLinkify = ({ children, linkColor }: TCustomLinkify) => (
  <Linkify
    componentDecorator={(
      decoratedHref: string,
      decoratedText: string,
      key: number
    ) => (
      <SLink
        href={decoratedHref}
        key={key}
        target="_blank"
        linkColor={linkColor}
      >
        {decoratedText}
      </SLink>
    )}
  >
    {children}
  </Linkify>
)

export default CustomLinkify

const SLink = styled.a<{ linkColor?: keyof DefaultTheme["colors"] }>`
  color: ${props =>
    props.theme.colors[props.linkColor] ?? props.theme.colors.purple};
  &:hover {
    color: ${props =>
      props.linkColor
        ? darken(0.2, props.theme.colors[props.linkColor])
        : darken(0.2, props.theme.colors.purple)};
  }
`
