import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, p {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: gray;
  }
`;

export default GlobalStyle;
