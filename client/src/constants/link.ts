const links: LinkData[] = [
  { id: 1, title: "home", url: "/" },
  { id: 2, title: "about", url: "/about" },
  { id: 3, title: "projects", url: "/projects" },
  { id: 4, title: "blog", url: "/blogs" },
  { id: 5, title: "contact", url: "/contact" },
]

export default links

export interface LinkData {
  id: number
  title: string
  url: string
}
