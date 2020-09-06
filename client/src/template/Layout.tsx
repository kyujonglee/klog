import React, { useState, useCallback } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import GlobalStyles from "../styles/globalStyles"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const clickSideMenu = useCallback(() => {
    setShowSidebar(state => !state)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar clickSideMenu={clickSideMenu} />
      <Sidebar showSidebar={showSidebar} clickSideMenu={clickSideMenu} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
