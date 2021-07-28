import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    themeTitle: string;

    colors: {
      secundary: string;
      background_primary: string;
      background_secundary: string;
      answered: string;
      highlighted: string;
      input_border: string;
      input_background: string;
      input_text: string;
      liked: string;
      color: string;
      text: string;
      text_title: string;
      text_primary: string;
      text_secundary: string;
      alert_mgs: string;
      login_btn: string;
      button_background: string;
      separator: string;
    };
  }
}
