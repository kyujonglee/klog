import React from "react"
import { PageProps } from "gatsby"
import Layout from "../template/Layout"
import Navbar from "../components/Navbar"
import About from "../components/About"

function IndexPage(props: PageProps) {
  return (
    <Layout>
      <Navbar />
      <About />
    </Layout>
  )
}

export default IndexPage
