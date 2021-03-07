import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import FlexBox from "./FlexBox"

function DefaultImage({ ...rest }) {
  return (
    <FlexBox {...rest} justifyContent="center" alignItems="center">
      <StaticImage
        src="https://res.cloudinary.com/drmyhghgu/image/upload/v1615132086/blackbell_cjtjyk.png"
        alt="default image"
        width={100}
        height={100}
      />
    </FlexBox>
  )
}

export default DefaultImage
