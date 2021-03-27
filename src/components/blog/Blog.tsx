import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import styled from "styled-components"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

import Layout from "../../template/Layout"
import MarkDownContainer from "../common/MarkDownContainer"
import PrevButton from "../common/PrevButton"
import { Line, Title } from "../../pages/projects"
import { Container, FlexBox } from "../common"
import SEO from "../common/SEO"

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={tomorrow}
        language={language}
        children={value}
        customStyle={{ borderRadius: "0.5rem", fontSize: "0.875rem" }}
      />
    )
  },
}

function Blog({ location, data }) {
  const {
    blog: { title, content, tags },
  } = data
  return (
    <Layout>
      <SEO
        url={location.pathname}
        title={title}
        siteTitle={`Blog | ${title}`}
        keyword={tags.map(tag => tag.name).join(", ")}
      />
      <BackWrapper>
        <Wrapper>
          <FlexBox>
            <PrevButton to="/blog" />
            <div>
              <Title>blog</Title>
              <Line color="#ffc9c9" />
            </div>
          </FlexBox>
          <MarkDownContainer>
            <ReactMarkdown
              renderers={renderers}
              plugins={[gfm]}
              children={content}
            />
          </MarkDownContainer>
        </Wrapper>
      </BackWrapper>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query GetBlogDetail($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      id
      published_at(formatString: "yyyy-MM-DD")
      slug
      tags {
        id
        name
      }
      title
      content
    }
  }
`

export const BackWrapper = styled.div`
  background-color: #f8f9fa;
`

export const Wrapper = styled(Container)`
  padding-top: 12vh;
  min-height: 85vh;
`
