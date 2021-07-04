import React, { useCallback, useMemo, useState } from "react"
import { graphql, Link } from "gatsby"
import styled, { css } from "styled-components"
import { lighten } from "polished"

import Layout from "../template/Layout"
import { Line, Title, Wrapper } from "./projects"
import { phoneMediaQuery } from "../styles/responsive"
import { FlexBox } from "../components/common"
import { format } from "date-fns"
import SEO from "../components/common/SEO"

const ALL = "ALL"
// Todo: filter 기능 (Tags로 filter)

function BlogPage({ location, data }) {
  const {
    blogs: { nodes: blogs },
  } = data

  const [checked, setChecked] = useState(ALL)
  const handleCheckTag = useCallback(
    tagName => {
      if (checked !== tagName) setChecked(tagName)
      else setChecked(ALL)
    },
    [checked, setChecked]
  )

  const tags = useMemo(
    () =>
      blogs.reduce((arr, { tags }) => {
        tags.forEach(tag => {
          if (
            tag.name &&
            !arr.some(
              ({ name }) => tag.name.toUpperCase() === name.toUpperCase()
            )
          )
            arr.push(tag)
        })
        return arr
      }, []),
    [blogs]
  )

  const handleFilter = useCallback(
    tagName => () => {
      handleCheckTag(tagName)
    },
    [handleCheckTag]
  )

  const filterBlogs = useCallback(
    blog => {
      if (checked === ALL) return blog
      else {
        return blog.tags.some(
          ({ name }) => name && checked.toUpperCase() === name.toUpperCase()
        )
      }
    },
    [checked]
  )

  return (
    <Layout>
      <SEO
        url={location.pathname}
        description={"This is my blog posts."}
        siteTitle={`Blogs | Klog`}
      />
      <Wrapper>
        <Title>Blogs</Title>
        <Line color="#ffc9c9" />
        <FlexBox flexWrap="wrap">
          {
            <Tag onClick={handleFilter(ALL)} isChecked={checked === ALL}>
              All
            </Tag>
          }
          {tags.map(tag => (
            <Tag
              key={tag.id}
              onClick={handleFilter(tag.name)}
              isChecked={checked.toUpperCase() === tag.name.toUpperCase()}
            >
              {tag.name}
            </Tag>
          ))}
        </FlexBox>
        <BlogContainer>
          {blogs.filter(filterBlogs).map(blog => (
            <Blog key={blog.id}>
              <Link to={`/blogs/${blog.slug}`}>
                <BlogTitle>✏️ &nbsp; {blog.title}</BlogTitle>
              </Link>
              <FlexBox flexWrap="wrap" style={{ marginTop: "0.5rem" }}>
                {blog.tags.map(tag => {
                  return tag.name && <BlogTag key={tag.id}>{tag.name}</BlogTag>
                })}
              </FlexBox>
              🗓
              <SDate>{format(new Date(blog.published_at), "yyyy-MM-dd")}</SDate>
            </Blog>
          ))}
        </BlogContainer>
      </Wrapper>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    blogs: allStrapiBlogs(sort: { fields: published_at, order: DESC }) {
      nodes {
        published_at(formatString: "yyyy-MM-DD")
        slug
        tags {
          id
          name
        }
        title
        content
        id
      }
    }
  }
`

const BlogContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  ${phoneMediaQuery(css`
    grid-template-columns: repeat(1, 1fr);
  `)}
  margin-top: 1rem;
`

export const TagCss = css`
  all: unset;
  padding: 6px 10px;
  background-color: ${props => lighten(0.35, props.theme.colors.red)};
  border-radius: 12px;
  text-transform: capitalize;
  color: ${props => props.theme.colors.red};
  margin-right: 4px;
  margin-bottom: 4px;
`
const Tag = styled.div<{ isChecked: boolean }>`
  ${TagCss}
  display: inline-flex;
  align-items: flex-end;
  cursor: pointer;
  border: 1px solid ${props => lighten(0.35, props.theme.colors.red)};
  &:hover {
    background-color: white;
  }
  ${props =>
    props.isChecked &&
    css`
      background-color: white;
      border: 1px solid ${props => lighten(0.35, props.theme.colors.red)};
    `}
`
const Blog = styled.article`
  background-color: ${props => lighten(0.3, props.theme.colors.purple)};
  color: ${props => props.theme.colors.title};
  padding: 1rem;
  border-radius: 6px;
`
const BlogTitle = styled.h3`
  font-weight: 500;
`
const BlogTag = styled.div`
  margin-right: 4px;
  margin-bottom: 4px;
  background-color: white;
  color: ${props => lighten(0.1, props.theme.colors.purple)};
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 0.875rem;
`
const SDate = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.text};
  font-size: 0.875rem;
  margin-left: 8px;
  margin-top: 4px;
`
