import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import GlobalStyles from "../styles/globalStyles"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
