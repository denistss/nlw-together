import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background_secundary};
    color: ${props => props.theme.colors.color};
    font-size: 16px;
    font-family: sans-serif;
  }
`;