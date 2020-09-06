import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgColor: string
      blue: string
      text: string
      title: string
      purple: string
      darkBlue: string
      gray: string
      orange: string
      liteOrange: string
    }
  }
}
