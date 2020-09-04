import React from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import GlobalStyles from "../styles/globalStyles"

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Layout
