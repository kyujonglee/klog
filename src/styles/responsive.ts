import { css } from "styled-components"

export const phoneMediaQuery = style => css`
  @media screen and (max-width: 768px) {
    ${style}
  }
`
