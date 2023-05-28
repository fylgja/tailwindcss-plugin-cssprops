const plugin = require("tailwindcss/plugin");

/**
 * Flatten Object into a flat Object
 *
 * @param {Object} obj - object to flatten
 * @returns Object - flattened object
 */
const flattenObj = (obj, separator = "-") => {
  let result = {};

  for (const i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      const temp = flattenObj(obj[i]);
      for (const j in temp) {
        result[i + separator + j] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }

  return result;
};

/**
 * Convert a string to kebab case.
 *
 * @param {string} string
 * @returns {string} kebab case string
 */
function kebabCase(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Creates json object from a javascript object with CSS props.
 * This used to create new javascript objects
 *
 * @param {Object} props
 * @returns {string}
 */
const toJsStyleTokens = (props) => {
  let styles = {};
  let stylesDark = {};

  Object.entries(props).forEach(([name, value]) => {
    if (typeof value === "string" || typeof value === "number") {
    } else if (Array.isArray(value)) {
      value = value.toString();
    } else {
      return console.warn(`Value of ${name} is not a string or number.`);
    }

    name = kebabCase(name);

    if (name.endsWith("-default")) {
      name = name.replace("-default", "");
    }

    let varName = `--${name}`;
    if (name.includes("-@media:dark")) {
      varName = varName.replace("-@media:dark", "");
    }

    if (name.includes("-@media:dark")) {
      stylesDark = { ...stylesDark, [varName]: value };
      return;
    } else {
      styles = { ...styles, [varName]: value };
    }
  });

  return {
    styles,
    stylesDark,
  };
};

/**
 *
 * @param {Object} options
 * @param {Object} options.tokens
 * @param {string|boolean} options.darkMode - the selector to use for dark mode or disable it with false
 * @returns
 */
function autoTokens({
  tokens,
  darkMode = "@media (prefers-color-scheme: dark)",
} = {}) {
  if (!tokens) return;
  const { styles, stylesDark } = toJsStyleTokens(flattenObj(tokens));

  return function ({ addBase }) {
    addBase({ ":root": { ...styles } });

    if (darkMode && Object.keys(stylesDark).length) {
      if (darkMode.startsWith("@media")) {
        addBase({ [darkMode]: { ":root": { ...stylesDark } } });
      } else {
        addBase({ [darkMode]: { ...stylesDark } });
      }
    }
  };
}

module.exports = plugin.withOptions(autoTokens);
