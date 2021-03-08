import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"
import { isMobile } from "react-device-detect"

export default createGlobalStyle`
    ${reset}
    font-size: ${isMobile ? "14px" : "15px"}
    body {
        background-color: ${props => props.theme.colors.bgColor};
        font-family: Roboto Open Sans;
    }
    * {
        box-sizing: border-box;
    }
    a {
        color: inherit;
        text-decoration: none;
        &:hover {
            color: inherit;
            text-decoration: none;
        }
    }
    button,
    input,
    textarea {
        &:active, &:focus {
            outline: none;
        }
    }
    li {
        list-style: none;
    }
`
