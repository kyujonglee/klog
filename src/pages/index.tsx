import React from "react"
import Layout from "../template/Layout"
import About from "../components/main/About"
import Jobs from "../components/main/Jobs"
import Projects from "../components/main/project/Projects"
import SEO from "../components/common/SEO"
import { graphql, useStaticQuery } from "gatsby"

function Home() {
  const {
    introduce: { nodes: introduces },
  } = useStaticQuery(query)

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

export const query = graphql`
  query {
    introduce: allStrapiMainIntroduce {
      nodes {
        content
      }
    }
  }
`
