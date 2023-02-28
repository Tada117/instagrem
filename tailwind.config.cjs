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
        "ig-primary": "rgb(var(--text-primary) / <alpha-value>)",
        "ig-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        seperator: "rgb(var(--seperator) / <alpha-value>)",
        "ig-blue": "#0094f6",
        "ig-blue-hover": "#1877f2",
        "ig-blue-disable": "#b3dbff",
      },
      backgroundColor: {
        "ig-primary": "rgb(var(--bg-primary) / <alpha-value>)",
        "ig-secondary": "rgb(var(--bg-secondary) / <alpha-value>)",
        "ig-blue": "#0094f6",
        "ig-blue-hover": "#1877f2",
        "ig-blue-disable": "#b3dbff",
      },
      screen: {
        sm: "576px",
        md: "1024px",
        lg: "1440px",
      },
      maxWidth: {
        post: "470px",
      },
      width: {
        post: "470px",
      },
    },
  },
  darkMode: "class",
  mode: "jit",
  plugins: [],
};
