import React from "react"
import styled from "styled-components"
import { FcWorkflow } from "react-icons/fc"
import { FiMenu } from "react-icons/fi"
import links from "../constants/link"

const Container = styled.nav`
  margin: 0 auto;
  width: 90vw;
  background-color: transparent;
  max-width: 1170px;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
  padding-top: 1rem;
`
const HomePageName = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
`
const SubHomePageName = styled.span`
  font-size: 4rem;
  color: ${props => props.theme.colors.blue};
`
const LinkList = styled.ul`
  display: flex;
  & > li {
    margin-right: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const LinkItem = styled.li`
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${props => props.theme.colors.textColor};
  transition: color 0.3s linear;
  &:hover {
    color: ${props => props.theme.colors.blue};
  }
`
const MenuIcon = styled(FiMenu)`
  font-size: 2.5rem;
  display: none;
  cursor: pointer;
  opacity: 0.8;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

function Navbar() {
  return (
    <Container>
      <HomePageName>
        <FcWorkflow />
        klog<SubHomePageName>.</SubHomePageName>
      </HomePageName>
      <LinkList>
        {links.map(link => (
          <LinkItem>{link}</LinkItem>
        ))}
      </LinkList>
      <MenuIcon />
    </Container>
  )
}

export default Navbar
