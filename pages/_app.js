import { ThemeProvider } from "styled-components";
import { Globalstyle, theme } from "../styles/base";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Globalstyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
