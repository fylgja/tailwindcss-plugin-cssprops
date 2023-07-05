# Fylgja - TailwindCSS Plugin CSSProps

[![NPM version](https://img.shields.io/npm/v/@fylgja/tailwindcss-plugin-cssprops?style=flat-square)](https://www.npmjs.org/package/@fylgja/tailwindcss-plugin-cssprops)
![license](https://img.shields.io/github/license/fylgja/tailwindcss-plugin-cssprops?color=%23234&style=flat-square)

Introducing a powerful plugin that enhances your development experience by allowing you to manage your CSS variables directly in your `tailwindcss.config.js` file, eliminating the need to define them in your CSS.

With this plugin, you can effortlessly manage your CSS variables using design tokens or plain JSON. Regardless of your preferred method, integrating this plugin into your workflow provides a seamless way to incorporate CSS variables into your stylesheets.

## Installation

```bash
npm install @fylgja/tailwindcss-plugin-cssprops
```

## How to use

Add the plugin to your tailwind.config.js file:

```js
module.exports = {
  theme: {
    extend: {
        // ...
    }
  },
  plugins: [
    require('@fylgja/tailwindcss-plugin-cssprops')({
        tokens: {
            colors: {
                primary: "200 50% 50%" // HSL color syntax
            },
        },
    }),
  ],
}
```

Also make sure to add your the tokens to the plugin options.

Now you can use the tokens like ny CSS vairbale in your frontend.

To take it a step futere you can also add this to your TailwindCSS colors;

```js
module.exports = {
  theme: {
    extend: {
        colors: {
            primary: {
                DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
            }
        }
    }
  },
  plugins: [
    require('@fylgja/tailwindcss-plugin-cssprops')({
        tokens: {
            colors: {
                primary: {
                    DEFAULT: "200 50% 50%" // HSL color syntax
                }
            },
        },
    }),
  ],
}
```

so you can use it as `bg-primary`.

For more information on how to use CSS variables in TailwindCSS see the [TailwindCSS docs on using-css-variables](https://tailwindcss.com/docs/customizing-colors#using-css-variables)
