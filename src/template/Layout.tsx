import React, { useState, useCallback } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import GlobalStyles from "../styles/globalStyles"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import TopButton from '../components/TopButton'

function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const clickSideMenu = () => {
    setShowSidebar(state => !state)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar clickSideMenu={clickSideMenu} />
      <Sidebar showSidebar={showSidebar} clickSideMenu={clickSideMenu} />
      {children}
      <TopButton />
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
