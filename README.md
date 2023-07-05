# Fylgja - TailwindCSS CSSProps Plugin

[![NPM version](https://img.shields.io/npm/v/@fylgja/tailwindcss-plugin-css-props)](https://www.npmjs.org/package/@fylgja/tailwindcss-plugin-css-props)
![license](https://img.shields.io/github/license/fylgja/tailwindcss-plugin-css-props)

Introducing a powerful plugin that enhances your development experience by allowing you to manage your CSS variables directly in your `tailwindcss.config.js` file, eliminating the need to define them in your CSS.

With this plugin, you can effortlessly manage your CSS variables using design tokens or plain JSON. Regardless of your preferred method, integrating this plugin into your workflow provides a seamless way to incorporate CSS variables into your stylesheets.

## Installation

```bash
npm install @fylgja/tailwindcss-plugin-css-props
```

Then add the plugin to your tailwind.config.js file:

```js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@fylgja/tailwindcss-plugin-css-props'),
    // ...
  ],
}
```

## How to use

<!-- TODO -->