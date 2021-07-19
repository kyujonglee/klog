import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { useLocation } from "@reach/router"

import theme from "../styles/theme"
import GlobalStyles from "../styles/globalStyles"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import TopButton from "../components/TopButton"
import ProgressBar from "../components/ProgressBar"

function Layout({ children }) {
  const location = useLocation()
  const showProgressBar = location.pathname.startsWith("/blogs/")
  const [showSidebar, setShowSidebar] = useState(false)
  const clickSideMenu = () => {
    setShowSidebar(state => !state)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {showProgressBar && <ProgressBar />}
      <Navbar clickSideMenu={clickSideMenu} />
      <Sidebar showSidebar={showSidebar} clickSideMenu={clickSideMenu} />
      {children}
      <TopButton />
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
