import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Inter;
  }
`;

const theme = {
  colors: {
    primary: '#1983FF',
    text: '#4b5563'
  },
}

export { Globalstyle, theme }