import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleKeyDown = (e) => {
    if (e.key === "x" || e.key === "X") toggleTheme();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [theme]);

  return (
    <p className="fixed bottom-8 right-8 text-xs tracking-wide">
      Letter X &mdash; theme
    </p>
  );
}
