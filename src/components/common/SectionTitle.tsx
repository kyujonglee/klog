import React, { ReactNode } from "react"
import styled, { CSSObject } from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  padding: 5px;
`
const BottomLine = styled.div<{ color: Pick<TSectionTitleProps, "color"> }>`
  width: 50px;
  border-bottom: 5px solid ${props => props.color ?? props.theme.colors.purple};
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
`

type TSectionTitleProps = {
  children: ReactNode
  color?: CSSObject["color"]
  style?: React.CSSProperties
}

export default function SectionTitle({
  children,
  color,
  style,
  ...rest
}: TSectionTitleProps) {
  return (
    <Container style={style} {...rest}>
      {children}
      <BottomLine color={color} />
    </Container>
  )
}
