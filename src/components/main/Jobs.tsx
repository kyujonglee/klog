import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { keyframes } from "styled-components"
import { formatDate } from "../../lib/formatters"
import { FcCalendar } from "react-icons/fc"
import { isMobile } from "react-device-detect"
import { SectionTitle, Container, MoreButton, FlexBox } from "../common"
import SDate from "../common/SDate"
import CustomLinkify from "../../lib/CustomLinkify"
import { motion } from "framer-motion"

const SHOW_COUNT = 3

const styleMarginBottom = { marginBottom: "5px" }

function Jobs() {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query)
  const [tab, setTab] = React.useState(0)
  const [limit, setLimit] = React.useState(SHOW_COUNT)

  const showMore = jobs.length > 3 && limit === SHOW_COUNT
  const handleShowBtn = () => setLimit(jobs.length)

  return (
    <Wrapper>
      <SectionTitle style={{ marginTop: isMobile ? "5px" : "0px" }}>
        Jobs
      </SectionTitle>

      {isMobile ? (
        <Column>
          {jobs
            .filter((_, idx) => idx < limit)
            .map(({ id, title, subTitle, startDate, endDate, desc }, idx) => (
              <Section
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.25 }}
              >
                <Title style={styleMarginBottom}>{title}</Title>
                <div style={styleMarginBottom}>
                  <FcCalendar style={{ marginRight: "5px" }} />
                  <span>{formatDate(new Date(startDate))}</span> ~{" "}
                  <span>{formatDate(new Date(endDate))}</span>
                </div>
                <SubTitle>{subTitle}</SubTitle>
                <CustomLinkify>
                  {desc.map(description => (
                    <Description key={description.id}>
                      {description.content}
                    </Description>
                  ))}
                </CustomLinkify>
              </Section>
            ))}
          {showMore && (
            <MoreButtonWrapper onClick={handleShowBtn}>
              <MoreButton width="150px" height="35px" />
            </MoreButtonWrapper>
          )}
        </Column>
      ) : (
        <ContentSize>
          <Tabs>
            {jobs.map((job, idx) => (
              <Tab
                key={job.id}
                onClick={setTab.bind(null, idx)}
                isActive={idx === tab}
              >
                {job.title}
              </Tab>
            ))}
          </Tabs>
          <Content>
            {jobs
              .filter((_, idx) => idx === tab)
              .map(({ id, title, subTitle, startDate, endDate, desc }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Title>
                    {title}
                    <SDate
                      startDate={startDate}
                      endDate={endDate}
                      style={{ marginLeft: "10px" }}
                    />
                  </Title>
                  <SubTitle>{subTitle}</SubTitle>
                  <CustomLinkify>
                    {desc.map(description => (
                      <Description key={description.id}>
                        {description.content}
                      </Description>
                    ))}
                  </CustomLinkify>
                </motion.div>
              ))}
          </Content>
        </ContentSize>
      )}
    </Wrapper>
  )
}

export default Jobs

const query = graphql`
  query {
    allStrapiJobs(sort: { order: DESC, fields: endDate }) {
      nodes {
        endDate
        startDate
        id
        title
        subTitle
        desc {
          content
          id
        }
      }
    }
  }
`

const Wrapper = styled.div`
  min-height: 70vh;
  background-color: ${props => props.theme.colors.lightBlue};
  padding-top: 30px;
  padding-bottom: 30px;
`

const ContentSize = styled(Container)`
  background-color: white;
  border-radius: 30px;
  display: flex;
  padding: 40px;
  height: 100%;
`

const Tabs = styled.ul`
  width: 20%;
`
const Tab = styled.li<{ isActive: boolean }>`
  padding: 10px 10px;
  border-radius: 5px;
  font-weight: 500;
  word-break: keep-all;
  color: ${props =>
    props.isActive ? props.theme.colors.red : props.theme.colors.text};
  cursor: pointer;
  background-color: ${props => (props.isActive ? "#fff0f6" : "white")};
  line-height: 1.2;
  margin-bottom: 0.25rem;
`

const Content = styled.article`
  width: 80%;
  padding-left: 20px;
  position: relative;
  min-height: 50vh;
`

const ShakeItAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    85% {
        transform: scale(1);
    }
    90% {
        transform: scale(1.01);
    }
    95% {
        transform: scale(0.99);
    }
    100% {
        transform: scale(1);
    }
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  animation: ${ShakeItAnimation} 5s linear infinite;

  color: ${props => props.theme.colors.black};
  font-size: 1.25rem;
  font-weight: bold;

  & > span {
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.gray};
  }
`

const SubTitle = styled.h5`
  color: ${props => props.theme.colors.gray};
  margin-bottom: 1rem;
  font-size: 0.875rem;
`

const Description = styled.p`
  margin-bottom: 0.5rem;
  line-height: 1.4;
  white-space: pre-wrap;
  opacity: 0.8;
  border-radius: 10px;
  background-color: #dee2e6;
  padding: 10px 16px;
`

const Column = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5px 10px 10px 10px;
`

const Section = styled(motion.article)`
  margin-top: 1.25rem;
  background-color: white;
  padding: 20px 15px 10px 15px;
  border-radius: 10px;
`

const MoreButtonWrapper = styled(FlexBox).attrs({
  alignItems: "center",
  justifyContent: "center",
})`
  margin: 10px;
`
