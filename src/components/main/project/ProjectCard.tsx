import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FlexBox } from "../../common"
import { Link } from "gatsby"
import DefaultImage from "../../common/DefaultImage"
import { Project } from "../../../types"
import SDate from "../../common/SDate"

type TProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: TProjectCardProps) {
  const { image, title, subTitle, startDate, endDate, slug } = project
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
        <SDate startDate={startDate} endDate={endDate} dateColor="#12b886" />
      </Content>
    </Wrapper>
  )
}

export default ProjectCard

const Wrapper = styled.article`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
`
const Content = styled.div`
  padding: 1.125rem;
`
const Title = styled.h3`
  color: ${props => props.theme.colors.title};
  font-weight: 500;
  margin-bottom: 10px;
  cursor: pointer;
`
const SubTitle = styled.h5`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`
