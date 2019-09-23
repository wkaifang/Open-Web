const merge = require("webpack-merge");
var webpackBaseConfig = require("./webpack.base.config");

module.exports = merge(webpackBaseConfig, {
  mode: "production"
});
