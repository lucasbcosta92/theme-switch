import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secunday: string;

      backgroundColor: string;
      textColor: string;
    }
  }
}