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

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'black',

  // Form colors
  // inputBg: 'black',
  // inputBorder: 'silver',
  // inputTextColor: 'white',
  // inputBorderRadius: 4,

  brandTitle: "Cedcommerce",
  brandUrl: "https://cedcommerce.com",
  brandImage:
    "https://d3vlhkqyz4y38a.cloudfront.net/skin/frontend/cedcomnew/default/images/header/logo/ced-logo-web.svg",
};

addons.setConfig({
  theme: create(config),
});
