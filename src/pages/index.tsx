import React from "react"
import Layout from "../template/Layout"
import About, { aboutQuery } from "../components/main/About"
import Jobs from "../components/main/Jobs"
import Projects from "../components/main/project/Projects"
import SEO from "../components/common/SEO"
import { useStaticQuery } from "gatsby"

function Home() {
  const {
    site: { nodes },
    introduce: { nodes: introduces },
  } = useStaticQuery(aboutQuery)

  return (
    <Layout>
      <SEO url={"/"} description={introduces[0].content} />
      <About />
      <Jobs />
      <Projects />
    </Layout>
  )
}

export default Home
