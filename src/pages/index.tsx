import React from "react"
import Layout from "../template/Layout"
import About from "../components/main/About"
import Jobs from "../components/main/Jobs"
import Projects from "../components/main/project/Projects"

function Home() {
  return (
    <Layout>
      <About />
      <Jobs />
      <Projects />
    </Layout>
  )
}

export default Home
