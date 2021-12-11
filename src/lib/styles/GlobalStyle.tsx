import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: gray;
  }
`;

export default GlobalStyle;
