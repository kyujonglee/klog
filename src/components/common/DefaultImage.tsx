import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import FlexBox from "./FlexBox"

function DefaultImage({ ...rest }) {
  return (
    <FlexBox {...rest} justifyContent="center" alignItems="center">
      <StaticImage
        src="../../images/blackbell.png"
        alt="default image"
        width={100}
        height={100}
      />
    </FlexBox>
  )
}

export default DefaultImage
