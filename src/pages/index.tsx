import React from "react"
import LazyLoad from "react-lazyload"
import Layout from "../template/Layout"
import About from "../components/main/About"
import Jobs from "../components/main/Jobs"
import Projects from "../components/main/project/Projects"
import SEO from "../components/common/SEO"

function Home() {
  return (
    <Layout>
      <SEO url={"/"} />
      <LazyLoad once height={500}>
        <About />
      </LazyLoad>
      <LazyLoad once height={500}>
        <Jobs />
      </LazyLoad>
      <LazyLoad once height={500}>
        <Projects />
      </LazyLoad>
    </Layout>
  )
}

export default Home
