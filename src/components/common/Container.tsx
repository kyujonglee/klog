import styled, { css } from "styled-components"
import { isMobile } from "react-device-detect"

const Container = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  ${!isMobile &&
  css`
    min-width: 700px;
  `}
`

export default Container
