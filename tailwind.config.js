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
        xxx: ["0.50rem", { lineHeight: "0rem" }],
        xxs: ["0.60rem", { lineHeight: "0rem" }],
      },
      letterSpacing: {
        xwidest: "0.38em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
