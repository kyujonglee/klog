import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { lighten, darken } from "polished"

import { Project } from "../../types"
import { FlexBox } from "../common"
import DefaultImage from "../common/DefaultImage"
import SDate from "../common/SDate"

type TProjectCardDetailProps = {
  project: Project
}

function ProjectCardDetail({ project }: TProjectCardDetailProps) {
  const { image, title, subTitle, startDate, endDate, slug, stacks } = project
  return (
    <Wrapper>
      <Link to={`/projects/${slug}`}>
        <FlexBox
          justifyContent="center"
          style={{
            backgroundColor: "#2e2929",
            cursor: "pointer",
            height: "200px",
          }}
        >
          {image ? (
            <GatsbyImage image={getImage(image)} alt="" />
          ) : (
            <DefaultImage />
          )}
        </FlexBox>
      </Link>
      <Content>
        <Link to={`/projects/${slug}`}>
          <Title>🔍 &nbsp;{title}</Title>
        </Link>
        <SubTitle>{subTitle}</SubTitle>
        <FlexBox flexWrap="wrap">
          {stacks.map(stack => (
            <Stack key={stack.id}>{stack.name}</Stack>
          ))}
        </FlexBox>
        <SDate startDate={startDate} endDate={endDate} dateColor="#12b886" />
      </Content>
    </Wrapper>
  )
}

export default ProjectCardDetail

const Wrapper = styled.article`
  min-width: 200px;
  background-color: ${props => lighten(0.1, props.theme.colors.lightGreen)};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`
const Content = styled.div`
  padding: 16px;
`
const Title = styled.h3`
  color: ${props => props.theme.colors.title};
  /* color: ${props => darken(0.1, props.theme.colors.orange)}; */
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25;
`
const SubTitle = styled.p`
  color: ${props => props.theme.colors.text};
  /* color: ${props => lighten(0.05, props.theme.colors.orange)}; */
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 0.875rem;
`
const Stack = styled.li`
  padding: 5px 10px;
  background-color: white;
  border-radius: 12px;
  text-transform: capitalize;
  color: ${props => props.theme.colors.red};
  margin-right: 4px;
  margin-bottom: 4px;
`
