import React from "react"
import { FcCalendar } from "react-icons/fc"
import styled, { CSSObject } from "styled-components"
import { formatDate } from "../../lib/formatters"

type TSDateProps = {
  startDate: string
  endDate: string
  dateColor?: string
  fontSize?: string
  style?: React.CSSProperties
}

function SDate({
  startDate,
  endDate,
  fontSize,
  dateColor,
  style,
  ...rest
}: TSDateProps) {
  return (
    <Time style={style} dateColor={dateColor} fontSize={fontSize} {...rest}>
      <FcCalendar style={{ marginRight: "5px" }} />{" "}
      {formatDate(new Date(startDate))} ~ {formatDate(new Date(endDate))}
    </Time>
  )
}

export default SDate

const Time = styled.time<{
  fontSize?: string
  dateColor?: string
}>`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: ${props => props.dateColor ?? props.theme.colors.text};
  font-size: ${props => props.fontSize ?? "0.875rem"};
`
