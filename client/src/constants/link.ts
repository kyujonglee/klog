const links: LinkData[] = [
  { id: 0, title: "home" },
  { id: 1, title: "about" },
  { id: 2, title: "projects" },
  { id: 3, title: "blog" },
]

export default links

export interface LinkData {
  id: number
  title: string
}
