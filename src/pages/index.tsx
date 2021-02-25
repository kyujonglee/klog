import React from "react"
import { PageProps } from "gatsby"
import Layout from "../template/Layout"
import About from "../components/main/About"
import Jobs from "../components/main/Jobs"

function Home(props: PageProps) {
  return (
    <Layout>
      <About />
      <Jobs />
    </Layout>
  )
}

export default Home
