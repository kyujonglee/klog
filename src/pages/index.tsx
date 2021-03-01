import React from "react"
import Layout from "../template/Layout"
import About from "../components/main/About"
import Jobs from "../components/main/Jobs"

function Home() {
  return (
    <Layout>
      <About />
      <Jobs />
    </Layout>
  )
}

export default Home
