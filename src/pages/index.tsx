import React from "react"
import LazyLoad from "react-lazyload"
import Layout from "../template/Layout"
import SEO from "../components/common/SEO"
import loadable from "@loadable/component"

const About = loadable(() => import("../components/main/About"))
const Jobs = loadable(() => import("../components/main/Jobs"))
const Projects = loadable(() => import("../components/main/project/Projects"))

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
