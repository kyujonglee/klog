import React from "react"
import styled, { css } from "styled-components"
import { FcWorkflow } from "react-icons/fc"
import { FiMenu } from "react-icons/fi"
import links from "../constants/link"
import { phoneMediaQuery } from "../styles/responsive"
import { Link } from "gatsby"

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: transparent;
`
const Nav = styled.nav`
  margin: 0 auto;
  width: 90vw;
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
    margin-right: 1.5rem;
  }
  ${phoneMediaQuery(
    css`
      display: none;
    `
  )}
`
const LinkItem = styled.li`
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
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
  ${phoneMediaQuery(
    css`
      display: block;
    `
  )}
`
interface INavbarProps {
  clickSideMenu: () => void
}

function Navbar({ clickSideMenu }: INavbarProps) {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <HomePageName>
            <FcWorkflow />
            klog<SubHomePageName>.</SubHomePageName>
          </HomePageName>
        </Link>
        <LinkList>
          {links.map(link => (
            <LinkItem key={link.id}>
              <Link to={link.url}>{link.title}</Link>
            </LinkItem>
          ))}
        </LinkList>
        <MenuIcon onClick={clickSideMenu} />
      </Nav>
    </Container>
  )
}

export default Navbar
