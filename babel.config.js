const presets = [
  [
    "@babel/preset-env",
    {
      modules: false,
      bugfixes: true,
      targets: { browsers: "> 0.25%, ie 11, not op_mini all, not dead" },
    },
  ],
  "@babel/preset-react",
];

const plugins = ["@babel/plugin-proposal-class-properties"];

module.exports = { presets, plugins };
