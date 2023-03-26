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
            keyframes: {
                slideDown: {
                    from: {
                        height: 0,
                    },
                    to: {
                        height: "var(--radix-accordion-content-width)",
                    },
                },
                slideUp: {
                    from: {
                        height: "var(--radix-accordion-content-width)",
                    },
                    to: {
                        height: 0,
                    },
                },
            },
            animation: {
                slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
                slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
            },
        },
    },
    plugins: [
        require("tailwindcss-radix")({
            variantPrefix: "rdx",
        }),
    ],
}
