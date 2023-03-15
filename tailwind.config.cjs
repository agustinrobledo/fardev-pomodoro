/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#14342b",
        "light-green": "#C2F970",
        blue: "#031A6B",
        pink: "#B6174B",
        gray: "#C4BBB8",
      },
    },
  },
  plugins: [],
};
