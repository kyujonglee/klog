import React from "react"
import styled, {
  StyledComponentPropsWithRef,
  CSSObject,
} from "styled-components"
import { darken, linearGradient } from "polished"

type TMoreButton = {
  text?: string
  width?: CSSObject["width"]
  height?: CSSObject["height"]
} & StyledComponentPropsWithRef<"button">

const MoreButton = React.forwardRef<HTMLButtonElement, TMoreButton>(
  ({ text, width, height, ...rest }, ref) => {
    return (
      <Wrapper style={{ width, height }} ref={ref} {...rest}>
        {text}
      </Wrapper>
    )
  }
)

MoreButton.defaultProps = {
  text: "more",
  width: "150px",
  height: "40px",
}

export default MoreButton

const Wrapper = styled.button`
  all: unset;
  border-radius: 10px;
  ${props =>
    linearGradient({
      colorStops: [
        `${props.theme.colors.purple} 0%`,
        `${props.theme.colors.orange} 80%`,
        `${props.theme.colors.red} 95%`,
      ],
      toDirection: "to top right",
      fallback: "#FFF",
    })};
  color: white;
  cursor: pointer;
  &:active {
    background-color: ${props => darken(0.2, props.theme.colors.purple)};
  }
  display: flex;
  justify-content: center;
  align-items: center;
`
