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
import { isServer } from "../constants/common"

function Preview() {
  const [text, setText] = useState("")

  React.useEffect(() => {
    if (isServer) {
      setText(localStorage.getItem("preview"))
    }
  }, [setText])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Column>
          <SectionTitle>Preview</SectionTitle>
          <Editor
            value={text}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              const { value } = e.target
              setText(value)
              localStorage.setItem("preview", value)
            }}
            onKeyDown={e => {
              if (e.key === "Tab" && !e.shiftKey) {
                document.execCommand("insertText", false, "\t")
                e.preventDefault()
                return false
              }
            }}
          />
        </Column>
        <Column>
          {/* https://github.com/remarkjs/react-markdown */}
          {/* another: https://github.com/uiwjs/react-md-editor */}
          <MarkDownContainer style={{ overflowY: "auto", height: "90vh" }}>
            <ReactMarkdown
              plugins={[breaks, gfm, math]}
              renderers={renderers}
              children={text}
              allowDangerousHtml
              unwrapDisallowed
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
  tab-size: 32px;
`
