import React from "react"
import {
  FcAbout,
  FcBusinessContact,
  FcViewDetails,
  FcReading,
  FcHome,
} from "react-icons/fc"

const links: LinkData[] = [
  { id: 1, title: "home", url: "/", icon: <FcHome /> },
  { id: 2, title: "about", url: "/about", icon: <FcAbout /> },
  { id: 3, title: "projects", url: "/projects", icon: <FcViewDetails /> },
  { id: 4, title: "blog", url: "/blogs", icon: <FcReading /> },
  { id: 5, title: "contact", url: "/contact", icon: <FcBusinessContact /> },
]

export default links

export interface LinkData {
  id: number
  title: string
  icon: React.ReactElement
  url: string
}
