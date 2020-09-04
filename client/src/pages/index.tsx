import React from "react"
import { PageProps } from "gatsby"
import Layout from "../template/Layout"
import Navbar from "../components/Navbar"

function IndexPage(props: PageProps) {
  return (
    <Layout>
      <Navbar />
    </Layout>
  )
}

export default IndexPage
