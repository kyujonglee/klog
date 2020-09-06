import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import GlobalStyles from "../styles/globalStyles"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
