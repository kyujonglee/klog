import { lighten } from "polished"
import React, { useCallback } from "react"
import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import throttle from "../lib/throttle"

const calProgressValue = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement
  const percent = (scrollTop / (scrollHeight - clientHeight)) * 100

  return { scrollTop, percent, scrollHeight, clientHeight }
}

const ProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      clientX,
      target: { scrollWidth },
    } = e

    const widthRatio = clientX / scrollWidth
    const { scrollHeight, clientHeight } = calProgressValue()
    const height = scrollHeight - clientHeight

    window.scrollTo({ top: height * widthRatio, behavior: "smooth" })
  }

  const handleScroll = useCallback(() => {
    const { scrollTop, percent } = calProgressValue()

    if (scrollTop === 0) {
      setScrollWidth(0)
      return
    }

    setScrollWidth(percent)
  }, [setScrollWidth])

  useEffect(() => {
    const throttleHandleScroll = throttle(handleScroll, 300)
    window.addEventListener("scroll", throttleHandleScroll)
    return () => window.removeEventListener("scroll", throttleHandleScroll)
  }, [handleScroll])

  return (
    <ProgressWrapper onClick={handleClick}>
      <Bar width={scrollWidth} />
    </ProgressWrapper>
  )
}

export default React.memo(ProgressBar)

const ProgressWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8px;
  background-color: ${props => lighten(0.2, props.theme.colors.purple)};
  transform: scale(1);
  cursor: pointer;
  z-index: 200;
`

const Bar = styled.div<{ width: number }>`
  height: 100%;
  background-color: ${props => props.theme.colors.purple};
  width: ${props => `${props.width}%`};
  transition: width 0.3s linear;
  pointer-events: none;
`
