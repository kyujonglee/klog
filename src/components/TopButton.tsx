import React from "react"
import styled from "styled-components"
import { AiOutlineArrowUp } from "react-icons/ai"
import FlexBox from "../components/common/FlexBox"
import throttle from "../lib/throttle"

const TopButton = () => {
  const [isScrollNeeded, setIsScrollNeeded] = React.useState(false)
  const handleScroll = React.useCallback(
    e => {
      const {
        scrollingElement: {
          scrollTop,
          scrollHeight,
          clientHeight,
          offsetHeight,
        },
      } = e.target
      setIsScrollNeeded(scrollTop + 200 > clientHeight)
    },
    [setIsScrollNeeded]
  )
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  React.useEffect(() => {
    const throttleHandleScroll = throttle(handleScroll, 200)
    window.addEventListener("scroll", throttleHandleScroll)
    return () => window.removeEventListener("scroll", throttleHandleScroll)
  }, [handleScroll])

  return (
    <TopBtn onClick={handleClick} isScrollNeeded={isScrollNeeded}>
      <AiOutlineArrowUp />
      <Name>Top</Name>
    </TopBtn>
  )
}

export default React.memo(TopButton)

const TopBtn = styled(FlexBox).attrs({
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
})<{ isScrollNeeded: boolean }>`
  position: fixed;
  bottom: 20px;
  right: ${props => (props.isScrollNeeded ? "20px" : "-40px")};

  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;

  transition: right 0.3s ease-in-out;
`

const Name = styled.span`
  font-size: 10px;
`
