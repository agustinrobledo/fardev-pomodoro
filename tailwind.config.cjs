/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-green": "#14342b",
                "light-green": "#C2F970",
                blue: "#031A6B",
                orange: "#fd682b",
                red: "#c94b41",
                gray: "#C4BBB8",
                white: "#d6d1c1",
                yellow: "#dfae35",
            },
        },
    },
    plugins: [],
}
