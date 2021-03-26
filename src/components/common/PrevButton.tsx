import React from "react"
import styled, { CSSObject } from "styled-components"
import { lighten } from "polished"
import { Link, GatsbyLinkProps } from "gatsby"
import { BiLeftArrowAlt } from "react-icons/bi"

type TPrevButtonProps = {
  arrowColor?: CSSObject["color"]
  arrowSize?: string
} & GatsbyLinkProps<any>

const PrevButton = React.forwardRef<Link<any>, TPrevButtonProps>(
  ({ arrowColor, arrowSize, to, ...rest }, ref) => {
    return (
      <Wrapper to={to} {...rest} ref={ref}>
        <BiLeftArrowAlt size={arrowSize} color={arrowColor} />
      </Wrapper>
    )
  }
)

PrevButton.defaultProps = {
  arrowColor: "#6C4EF4",
  arrowSize: "26",
}

export default PrevButton

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  margin-right: 6px;

  &:hover {
    background-color: ${props => lighten(0.6, props.theme.colors.gray)};
  }
`
