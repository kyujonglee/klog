import React from "react"
import Lottie from "react-lottie"

import animationData from "../lotties/cuty.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
}

interface ICharacterProps {
  color?: string
}

const Character = ({ color }: ICharacterProps) => {
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
