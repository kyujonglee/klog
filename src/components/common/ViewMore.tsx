import React from "react"
import styled, { CSSObject } from "styled-components"
import { darken } from "polished"
import { Link } from "gatsby"

const Text = styled.span<{ color: Pick<TViewMoreProps, "color"> }>`
  text-decoration: underline;
  color: ${props => props.color ?? darken(0.2, "#d0bfff")};
  font-weight: 600;
  font-size: 1.125rem;
`

type TViewMoreProps = {
  color?: CSSObject["color"]
  text: string
  url: string
}

function ViewMore({ text = "View More", color, url = "/" }: TViewMoreProps) {
  return (
    <Link to={url}>
      <Text color={color}>&gt; {text}</Text>
    </Link>
  )
}

export default ViewMore
