import styled, { css, CSSObject } from "styled-components"

export type TFlexBoxProps = {
  alignItems?: CSSObject["alignItems"]
  justifyContent?: CSSObject["justifyContent"]
  flexWrap?: CSSObject["flexWrap"]
  flexDirection?: CSSObject["flexDirection"]
  flexFlow?: CSSObject["flexFlow"]
  alignSelf?: CSSObject["flexFlow"]
}

/**
 * Flex 유틸리티 컴포넌트 입니다.
 */
const FlexBox = styled.div<TFlexBoxProps>`
  display: flex;
  ${({
    alignItems,
    justifyContent,
    flexWrap,
    flexDirection,
    flexFlow,
    alignSelf,
  }) =>
    css({
      alignItems,
      justifyContent,
      flexWrap,
      flexDirection,
      flexFlow,
      alignSelf,
    })}
`

export default FlexBox
