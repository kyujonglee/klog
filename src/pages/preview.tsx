import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import styled, { ThemeProvider } from "styled-components"
import gfm from "remark-gfm"
import breaks from "remark-breaks"
import math from "remark-math"
import { SectionTitle } from "../components/common"
import MarkDownContainer from "../components/common/MarkDownContainer"
import theme from "../styles/theme"
import { renderers } from "../components/blog/Blog"
import GlobalStyles from "../styles/globalStyles"

function Preview() {
  const [text, setText] = useState(localStorage.getItem("preview") || "")

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Column>
          <SectionTitle>Preview</SectionTitle>
          <Editor
            value={text}
            onChange={e => {
              const { value } = e.target
              setText(value)
              localStorage.setItem("preview", value)
            }}
          />
        </Column>
        <Column>
          <MarkDownContainer style={{ overflowY: "auto", height: "90vh" }}>
            <ReactMarkdown
              plugins={[breaks, gfm, math]}
              renderers={renderers}
              children={text}
              allowDangerousHtml
            />
          </MarkDownContainer>
        </Column>
      </Wrapper>
    </ThemeProvider>
  )
}

export default Preview

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  background-color: rgb(248, 249, 250);
`
const Column = styled.article`
  width: 50%;
  box-sizing: border-box;
  padding: 0.25rem;
`
const Editor = styled.textarea`
  box-sizing: border-box;
  padding: 0.5rem;
  outline: none;
  border: 3px solid ${props => props.theme.colors.purple};
  border-radius: 5px;
  height: 90vh;
  overflow-y: auto;
  width: 100%;
`