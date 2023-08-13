/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#2e2e36",
        "picture-border": "#57575c",
        "biography-bg": "#1a1d24",
        "biography-content": "#c5c7c8",
      },
      backgroundImage: {
        "godfather-header": "url('./img/header/godfather-header.jpg')",
      },
    },
  },
  plugins: [],
};
