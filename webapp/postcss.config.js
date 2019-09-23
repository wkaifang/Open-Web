const postcssPresetEnv = require("postcss-preset-env");
const precss = require("precss");
const lost = require("lost");
const stylelint = require("stylelint");

module.exports = {
  plugins: [
    postcssPresetEnv(),
    lost(),
    precss(),
    stylelint({
      extends: ["stylelint-prettier/recommended"]
    })
  ]
};
