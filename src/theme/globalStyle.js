import { createGlobalStyle } from "styled-components";

import { PRIMARY_BLUE, PRIMARY_GREEN } from "./constants";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${PRIMARY_GREEN};
    color: ${PRIMARY_BLUE};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
