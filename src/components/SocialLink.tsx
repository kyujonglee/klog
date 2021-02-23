import React from "react"
import styled, { css } from "styled-components"
import { ISocialLink } from "../constants/sns"
import { phoneMediaQuery } from "../styles/responsive"

const SLink = styled.a`
  font-size: 2rem;
  &:hover {
    color: ${props => props.theme.colors.purple};
  }
  ${phoneMediaQuery(css`
    font-size: 1.5rem;
  `)}
`

function SocialLink({ url, icon }: Omit<ISocialLink, "id">) {
  return (
    <li>
      <SLink href={url} target="_blank">
        {icon}
      </SLink>
    </li>
  )
}

export default SocialLink
