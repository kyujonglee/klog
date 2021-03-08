import styled, { css } from "styled-components"
import { isBrowser } from "react-device-detect"
import { phoneMediaQuery } from "../../styles/responsive"

const Container = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  ${isBrowser &&
  css`
    min-width: 700px;
  `};
`

export default Container
