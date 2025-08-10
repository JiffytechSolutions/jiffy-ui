import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

let config = {
  base: "light",
  // UI
  appBg: "#ffffff",

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",
};

addons.setConfig({
  theme: create(config),
});
