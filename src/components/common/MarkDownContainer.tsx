import styled from "styled-components"
import { lighten } from "polished"

const MarkDownContainer = styled.div`
  padding: 2rem;
  line-height: 1.2;
  color: ${props => props.theme.colors.gray};
  & {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }
    h1 {
      font-size: 2rem;
      padding: 0.8rem 0;
    }
    h2 {
      font-size: 1.75rem;
      padding: 0.7rem 0;
    }
    h3 {
      font-size: 1.5rem;
      padding: 0.6rem 0;
    }
    h4 {
      font-size: 1.25rem;
      padding: 0.5rem 0;
    }
    h5 {
      font-size: 1rem;
      padding: 0.4rem 0;
    }
    h6 {
      font-size: 0.75rem;
      padding: 0.3rem 0;
    }

    p {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    code {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      color: ${props => lighten(0.2, props.theme.colors.title)};
      background-color: ${props => lighten(0.32, props.theme.colors.purple)};
      border-radius: 0.5rem;
    }
    a {
      color: ${props => props.theme.colors.purple};
    }
    li {
      list-style: inside;
      margin: 0.25rem 0;
    }
  }
`

export default MarkDownContainer
