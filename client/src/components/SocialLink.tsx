import React from "react"
import styled from "styled-components"
import { ISocialLink } from "../constants/sns"

const SLink = styled.a`
  font-size: 2rem;
  &:hover {
    color: ${props => props.theme.colors.purple};
  }
`

interface ISocialLinkProps extends ISocialLink {}

function SocialLink({ url, icon, id }: ISocialLinkProps) {
  return (
    <li>
      <SLink href={url} target="_blank">
        {icon}
      </SLink>
    </li>
  )
}

export default SocialLink
