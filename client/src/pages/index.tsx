import React from "react"
import { PageProps } from "gatsby"
import Layout from "../template/Layout"
import About from "../components/About"

function IndexPage(props: PageProps) {
  return (
    <Layout>
      <About />
    </Layout>
  )
}

export default IndexPage
