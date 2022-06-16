import { createGlobalStyle } from 'styled-components';
import Karla from '../fonts/Karla-Regular.ttf';
import Rubik from '../fonts/Rubik-Regular.ttf';

const GlobalStyle = createGlobalStyle`
 @font-face {
  font-family: 'Karla';
    src: url(${Karla}) format('truetype');
  }

  @font-face {
  font-family: 'Rubik';
    src: url(${Rubik}) format('truetype');
  }
  
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
