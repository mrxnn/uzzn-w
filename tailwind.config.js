module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Matter Trial"],
    },
    extend: {
      colors: {
        brown: "#A58861",
        "brand-blue": "#0071FF",
      },
      fontSize: {
        xxs: ["0.60rem", { lineHeight: "0rem" }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
