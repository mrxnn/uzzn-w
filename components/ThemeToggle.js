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
    <button
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-900 h-8 flex items-center justify-center rounded-lg px-2 focus:outline-none focus:ring fixed bottom-8 right-8 z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="12"
      >
        <path
          className={theme === "light" ? "block" : "hidden"}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="gray"
          strokeWidth={3}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
        <path
          className={theme === "light" ? "hidden" : "block"}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="gray"
          strokeWidth={3}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </button>
  );
}
