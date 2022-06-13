import { createGlobalStyle } from 'styled-components';

import { PRIMARY_BLUE, PRIMARY_GREEN } from '../../theme/constants';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${PRIMARY_GREEN};
    color: ${PRIMARY_BLUE};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }
`;
