const links: LinkData[] = [
  { id: 1, title: "home" },
  { id: 2, title: "about" },
  { id: 3, title: "projects" },
  { id: 4, title: "blog" },
  { id: 5, title: "contact" },
]

export default links

export interface LinkData {
  id: number
  title: string
}
