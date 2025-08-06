import config from "./config.js";

export function generateCSS() {
  let css = "";

  for (const color in config.colors) {
    for (const shade in config.colors[color]) {
      css += `.bg-${color}-${shade} { background-color: ${config.colors[color][shade]}; }\n`;
    }
  }

  for (const key in config.spacing) {
    const val = config.spacing[key];
    css += `.p-${key} { padding: ${val}; }\n`;
    css += `.m-${key} { margin: ${val}; }\n`;
  }

  for (const screen in config.screens) {
    const media = `@media (min-width: ${config.screens[screen]}) {\n`;

    for (const color in config.colors) {
      for (const shade in config.colors[color]) {
        css += `${media}  .${screen}\\:bg-${color}-${shade} { background-color: ${config.colors[color][shade]}; }\n}\n`;
      }
    }

    for (const key in config.spacing) {
      const val = config.spacing[key];
      css += `${media}  .${screen}\\:p-${key} { padding: ${val}; }\n`;
      css += `${media}  .${screen}\\:m-${key} { margin: ${val}; }\n}\n`;
    }
  }

  return css;
}
