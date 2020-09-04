import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgColor: string
      blue: string
      textColor: string
    }
  }
}
