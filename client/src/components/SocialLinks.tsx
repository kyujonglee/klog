import React from "react"
import styled, { CSSProp } from "styled-components"
import { socialLinks } from "../constants/sns"
import SocialLink from "./SocialLink"

const List = styled.ul<{ styling: CSSProp }>`
  display: flex;
  & > li:not(:first-child) {
    margin-left: 1rem;
  }
  ${props => props.styling}
`

function SocialLinks({ styling }: { styling?: CSSProp }) {
  return (
    <List styling={styling}>
      {socialLinks.map(link => (
        <SocialLink
          key={link.id}
          icon={link.icon}
          url={link.url}
        />
      ))}
    </List>
  )
}

export default SocialLinks
