import React, { ReactElement } from "react"
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai"

export interface ISocialLink {
  id: number
  icon: ReactElement
  url: string
}

export const socialLinks: ISocialLink[] = [
  {
    id: 1,
    icon: <AiOutlineInstagram />,
    url: "https://www.instagram.com/kyujong.l/",
  },
  {
    id: 2,
    icon: <AiFillFacebook />,
    url: "https://www.facebook.com/profile.php?id=100003384011591",
  },
  {
    id: 3,
    icon: <AiFillGithub />,
    url: "https://github.com/kyujonglee",
  },
]
