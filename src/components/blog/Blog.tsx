import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import styled from "styled-components"
import { darken } from "polished"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

import Layout from "../../template/Layout"
import MarkDownContainer from "../common/MarkDownContainer"
import PrevButton from "../common/PrevButton"
import { Line, Title } from "../../pages/projects"
import { Container, FlexBox } from "../common"
import SEO from "../common/SEO"
import { TagCss } from "../../pages/blogs"

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
            <PrevButton to="/blogs" />
            <div>
              <Title>blog</Title>
              <Line color="#ffc9c9" />
            </div>
          </FlexBox>
          <div style={{ marginLeft: "1rem" }}>
            <BlogTitle>{title}</BlogTitle>
            <FlexBox flexWrap="wrap" style={{ marginTop: "1rem" }}>
              {tags.map(tag => (
                <Tag key={tag.id}>{tag.name}</Tag>
              ))}
            </FlexBox>
          </div>
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
export const Tag = styled.li`
  ${TagCss}
`
export const BlogTitle = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  color: ${props => darken(0.2, props.theme.colors.purple)};
  margin: 0.5rem 0;
`
