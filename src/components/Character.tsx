import React from "react"
import Lottie from "react-lottie"

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

const Character = ({
  // @ts-ignore
  color = theme.colors.characterBackground,
}: ICharacterProps) => {
  return (
    <Lottie
      options={defaultOptions}
      style={{
        background: color ?? "none",
        borderRadius: "10px",
      }}
    />
  )
}

export default Character
