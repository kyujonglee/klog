import React from "react"
import styled, { css } from "styled-components"
import { GiCancel } from "react-icons/gi"
import links from "../constants/link"
import { Link } from "gatsby"
import SocialLinks from "./SocialLinks"

interface ISidebarProps {
  showSidebar: boolean
  clickSideMenu: () => void
}

function Sidebar({ showSidebar, clickSideMenu }: ISidebarProps) {
  return (
    <Side showSidebar={showSidebar}>
      <SCancel onClick={clickSideMenu} />
      <Menu onClick={clickSideMenu}>
        {links.map(link => (
          <Link to={link.url} key={link.id}>
            <MenuItem>
              {link.icon} <MenuTitle>{link.title}</MenuTitle>
            </MenuItem>
          </Link>
        ))}
      </Menu>
      <SocialLinks styling={SocialLinkCss} />
    </Side>
  )
}

export default Sidebar

const Side = styled.aside<{ showSidebar: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.bgColor};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  ${props =>
    props.showSidebar
      ? css`
          transform: translateX(0%);
        `
      : css`
          transform: translateX(-100%);
        `}
  transition: transform 0.5s ease-in-out;
`
const SCancel = styled(GiCancel)`
  align-self: flex-end;
  font-size: 2rem;
  opacity: 0.7;
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    opacity: 1;
  }
`
const Menu = styled.ul`
  margin-bottom: 2rem;
`
const MenuItem = styled.li`
  margin-left: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.darkBlue};
  padding: 0.25rem;
`
const MenuTitle = styled.span`
  margin-left: 0.5rem;
`
const SocialLinkCss = css`
  justify-content: center;
  color: ${props => props.theme.colors.gray};
`
