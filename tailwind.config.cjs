module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;",
        ],
      },
      colors: {
        "bg-primary": "rgb(var(--bg-primary) / <alpha-value>)",
        "bg-secondary": "rgb(var(--bg-secondary) / <alpha-value>)",
        "text-primary": "rgb(var(--text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        "blue-btn": "#0094f6",
        "blue-btn-hover": "#1877f2",
        "blue-btn-disable": "#b3dbff",
        seperator: "rgb(var(--seperator) / <alpha-value>)",
      },
      screens: {
        sm: "576px",
        md: "1024px",
        lg: "1440px",
      },
    },
  },
  darkMode: "class",
  mode: "jit",
  plugins: [],
};
