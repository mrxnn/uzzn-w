import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Matter Trial;
  }
`;

const theme = {
  colors: {
    primary: "#1983FF",
    primarydark: "#146acc",
    text: "#4b5563",
  },
};

export { Globalstyle, theme };
