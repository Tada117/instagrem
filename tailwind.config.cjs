module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      colors: {
        "dark-800": "#121212",
        "dark-700": "#1e1e1e",
        "light-100": "#f9fbfc",
        gray: "#c4c4c4",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
