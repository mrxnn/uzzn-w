import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Product Sans;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
    text: '#4b5563'
  },
}

export { Globalstyle, theme }