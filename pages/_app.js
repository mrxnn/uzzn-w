import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Navbar />
      <ThemeToggle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
