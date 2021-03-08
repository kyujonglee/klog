export type Stack = {
  name: string
  id: number
}

export type Project = {
  title: string
  subTitle: string
  image?: any
  startDate: string
  endDate: string
  id: string
  stacks: Stack[]
  slug: string
}
