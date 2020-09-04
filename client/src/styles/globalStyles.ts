import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"

export default createGlobalStyle`
    ${reset}
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
`
