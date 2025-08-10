import babel from "rollup-plugin-babel";
import images from "rollup-plugin-image-files";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import smartAsset from "rollup-plugin-smart-asset";
import pkg from "./package.json";
import json from "@rollup/plugin-json";

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy';
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: {
      index : "src/index.ts",
    },
    output: [
      {
        dir: "dist",
        entryFileNames: "[name].js",
        format: "es",
        exports: 'named',
      },
      {
        dir: "dist",
        entryFileNames: "[name].modern.js",
        format: "cjs",
        exports: 'named',
      },
      {
        dir: "dist",
        entryFileNames: "[name].js",
        format: "cjs",
        exports: 'named',
      },
      {
        dir: "dist",
        entryFileNames: "[name].js",
        format: "cjs",
        exports: 'named',
      },
    ],
    external: [
      "react",
      "react-proptypes",
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      json(),
      peerDepsExternal(),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      resolve({
        browser: true,
      }),

      commonjs({
        include: ["node_modules/**"],
        namedExports: {
          "node_modules/react/react.js": [
            "Children",
            "Component",
            "PropTypes",
            "createElement",
          ],
          "node_modules/react-dom/index.js": ["render"],
          "react-dom": ["createPortal"],
        },
      }),
      babel({
        exclude: "node_modules/**",
      }),
      postcss({
        plugins: [autoprefixer()].filter(Boolean),
        // set it to false, by default it true
        autoModules: false,
        // used to modify the name of CSS Class
        // value [name]_[local]_[hash]
        modules: {
          generateScopedName: "[local]",
        },
        // only write out CSS for the first bundle (avoids pointless extra files):
        inject: false,
        extract: "index.css",
      }),
      smartAsset({
        url: "inline",
        useHash: false,
        keepName: true,
        keepImport: true,
        assetsPath: "/assets",
        publicPath: "./assets",
      }),
      copy({
        targets: [
          // Define the font files you want to copy
          { src: 'src/assets/fonts/*', dest: 'dist/assets/fonts' }
        ]
      }),
      external(),
      images(),
      terser(),
    ],
  },
];