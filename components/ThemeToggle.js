import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-gray-300 dark:bg-gray-800 h-8 flex items-center justify-center rounded-lg px-2 focus:outline-none focus:ring fixed bottom-8 right-8 z-50"
    >
      <p className="text-xs font-medium tracking-[3px] text-gray-500 mr-[2px]">
        {theme && theme.toUpperCase()}
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="16"
      >
        <path
          className={theme === "light" ? "block" : "hidden"}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="gray"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
        <path
          className={theme === "light" ? "hidden" : "block"}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="gray"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </button>
  );
}