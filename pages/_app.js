import "/styles/global.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

export default function MyApp({ Component, pageProps }) {
  return (
    //if using defaultTheme="dark", make sure to use enableSystem={false}
    <ThemeProvider attribute="class" defaultTheme="system">
      <Navbar />
      <ThemeToggle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
