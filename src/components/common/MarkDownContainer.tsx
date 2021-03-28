import styled from "styled-components"
import { lighten, darken } from "polished"

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
    a,
    blockquote a {
      color: ${props => props.theme.colors.purple};
    }
    b {
      font-weight: bold;
    }
    li {
      list-style: inside;
      margin: 0.25rem 0;
    }
    blockquote {
      border-left: 5px solid ${props => lighten(0.2, props.theme.colors.purple)};
      background-color: ${props => props.theme.colors.lightGray2};
      padding: 0.25rem 0rem;
      padding-left: 0.75rem;
      border-radius: 3px;
      margin: 0.75rem 0;
    }
    table {
      background-color: white;
      margin: 0.5rem 0;
      border-radius: 0.5rem;
      th,
      td {
        text-align: center;
        vertical-align: middle;
      }
      th {
        padding: 0.5rem;
        font-weight: 500;
        font-size: 1.125rem;
        border-bottom: 1px solid ${props => props.theme.colors.lightGray2};
        color: ${props => props.theme.colors.orange};
        &:not(:first-child) {
          border-left: 1px solid ${props => props.theme.colors.lightGray2};
        }
      }
      td {
        padding: 0.5rem;
        border: 0.25px solid ${props => props.theme.colors.lightGray};
        color: ${props => props.theme.colors.text};
        border-bottom: 0;
        &:first-child {
          border-left: 0;
          border-right: 1px solid ${props => props.theme.colors.lightGray2};
          color: ${props => darken(0.15, props.theme.colors.lightOrange)};
        }
        &:last-child {
          border-right: 0;
        }
      }
    }
  }
`

export default MarkDownContainer
