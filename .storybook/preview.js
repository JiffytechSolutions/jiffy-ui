import styles from "../src/style.css";
// .storybook/preview.js

import { themes } from "@storybook/theming";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import renderToHTML from "./RenderToHTML";
// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   docs: {

//   },
// }

const customViewports = {
  kindleFire2: {
    name: "Galaxy S5",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "600px",
      height: "801px",
    },
  },
  Pixel_5: {
    name: "Pixel 5",
    styles: {
      width: "411px",
      height: "823px",
    },
  },
};

// addParameters({
//   docs: {
//     container: DocsContainer,
//     page: DocsPage,
//   },
// });
export const parameters = {
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "Foundation",
        ["Introduction", "Colors", "Logo", "Icons"],
        "Templates",
        "Forms",
        "Components",
      ],
    },
  },
  layout: "fullscreen",
  controls: {
    expanded: true,
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
  backgrounds: {
    default: "Ounce",
    values: [
      {
        name: "Ounce",
        value: "#ffffff",
      },
      {
        name: "Dark",
        value: "#2A2A2A",
      },
      {
        name: "Light",
        value: "#f5f5f5",
      },
    ],
  },
  docs: {
    theme: themes.light,
    // transformSource: (src, storyContext) => {
    //   return renderToHTML(storyContext.storyFn, src);
    // },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
};
