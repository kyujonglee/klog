import React from "react"
import Lottie from "react-lottie"
import { isMobile } from "react-device-detect"
import { lighten } from "polished"

import animationData from "../lotties/cuty.json"
import theme from "../styles/theme"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
}

interface ICharacterProps {
  color?: string
}

const Character = ({ color }: ICharacterProps) => {
  console.log("isMobile", isMobile)
  return (
    <Lottie
      options={defaultOptions}
      isMobile={isMobile}
      style={{
        background:
          color ?? isMobile
            ? // @ts-ignore
              lighten(0.3, theme.colors.purple)
            : "none",
        borderRadius: "10px",
      }}
    />
  )
}

export default Character
