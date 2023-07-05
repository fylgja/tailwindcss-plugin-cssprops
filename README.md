# Fylgja - TailwindCSS Plugin CSSProps

[![NPM version](https://img.shields.io/npm/v/@fylgja/tailwindcss-plugin-cssprops?style=flat-square)](https://www.npmjs.org/package/@fylgja/tailwindcss-plugin-cssprops)
![license](https://img.shields.io/github/license/fylgja/tailwindcss-plugin-cssprops?color=%23234&style=flat-square)

Introducing a powerful plugin that enhances your development experience by allowing you to manage your CSS variables directly in your `tailwindcss.config.js` file, eliminating the need to define them in your CSS.

With this plugin, you can effortlessly manage your CSS variables using design tokens or plain JSON. Regardless of your preferred method, integrating this plugin into your workflow provides a seamless way to incorporate CSS variables into your stylesheets.

## Installation

```bash
npm install @fylgja/tailwindcss-plugin-cssprops
```

## How to Use

1. Add the plugin to your `tailwind.config.js` file:

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
          primary: {
            DEFAULT: "200 50% 50%" // HSL color syntax
          }
        },
      },
    }),
  ],
}
```

2. Ensure that you add your tokens to the plugin options.

3. Now you can use the tokens as CSS variables in your frontend.

To take it a step further, you can also add your tokens to TailwindCSS colors:

```js
const colors = require("@fylgja/colors/hsl");

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
            DEFAULT: colors.purple[8],
          },
        },
      },
    }),
  ],
}
```

Now you can use it as `bg-primary`.

For more information on how to use CSS variables in TailwindCSS, refer to the [TailwindCSS docs on using CSS variables](https://tailwindcss.com/docs/customizing-colors#using-css-variables).

### Dark Mode

This plugin fully supports dark mode, just like TailwindCSS. The difference is that you no longer need to define the utilities in your HTML.

To use dark mode tokens, add the key `@media:dark` to your tokens. Anything inside this key will automatically use the dark mode media query.

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
          primary: {
            DEFAULT: "200 50% 50%" // HSL color syntax
          },
          "primary-@media:dark": {
            DEFAULT: "200 50% 50%" // HSL color syntax
          },
          // Or use a wrapper as long as the media key is part of the group key, like "colors"
          "@media:dark": {
            primary: {
              DEFAULT: "200 50% 50%" // HSL color syntax
            }
          }
        },
      },
    }),
  ],
}
```

If you prefer to use a different class or selector, you can configure it using the `darkmode` option:

```js
module.exports = {
  // ...
  plugins: [
    require("@fylgja/tailwindcss-plugin-cssprops")({
      tokens: {
        // ...
      },
      darkmode: "[data-theme=dark]"
    })
  ]
}
```

Feel free to customize the `darkmode` option based on your specific needs and existing CSS classes or selectors.
