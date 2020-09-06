import React from "react"
import styled from "styled-components"
import { socialLinks } from "../constants/sns"
import SocialLink from "./SocialLink"

const List = styled.ul`
  display: flex;
  & > li:not(:first-child) {
    margin-left: 1rem;
  }
`

function SocialLinks() {
  return (
    <List>
      {socialLinks.map(link => (
        <SocialLink
          key={link.id}
          icon={link.icon}
          url={link.url}
          id={link.id}
        />
      ))}
    </List>
  )
}

export default SocialLinks
