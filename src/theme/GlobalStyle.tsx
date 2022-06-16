import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body, 
  #root {
    min-height: 100vh;
    min-width: 100vw;
    font-family: Apercu, sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;
