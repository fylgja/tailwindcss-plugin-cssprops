const colors = require("@fylgja/colors/hsl");
const darkModeClass = ".theme-dark";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class", darkModeClass],
    content: ["./tests/*.html"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            colors: {
                white: "hsl(var(--color-bg) / <alpha-value>)",
                black: "hsl(var(--color-fg) / <alpha-value>)",
                primary: {
                    lighter:
                        "hsl(var(--color-primary-lighter) / <alpha-value>)",
                    DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
                    darker: "hsl(var(--color-primary-darker) / <alpha-value>)",
                },
                on: {
                    primary: "hsl(var(--color-on-primary) / <alpha-value>)",
                },
            },
        },
    },
    plugins: [
        require("../index")({
            tokens: {
                color: {
                    bg: "0 100% 100%",
                    fg: "0 0% 0%",
                    primary: {
                        lighter: colors.purple[4],
                        DEFAULT: colors.purple[8],
                        darker: colors.purple[12],
                    },
                    on: {
                        primary: colors.purple[0],
                    },
                    "@media:dark": {
                        bg: "0 0% 0%",
                        fg: "0 100% 100%",
                        primary: {
                            lighter: colors.purple[12],
                            DEFAULT: colors.purple[8],
                            darker: colors.purple[4],
                        },
                        on: {
                            primary: colors.purple[0],
                        },
                    },
                },
            },
            darkMode: darkModeClass,
            wrapper: ":where(html)",
        }),
    ],
};
