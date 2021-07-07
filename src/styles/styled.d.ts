import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    themeTitle: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    };
  }
}
