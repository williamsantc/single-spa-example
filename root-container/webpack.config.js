const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ceiba-software",
    projectName: "root-config",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      disableHostCheck: true,
    },
    entry: {
      "root-config": path.resolve(__dirname, "src") + "/root-config.ts",
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: "body",
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal === "true",
        },
      }),
      new CopyWebpackPlugin([
        {
          from:
            "src/import-maps/import-map." +
            webpackConfigEnv.importMap +
            ".json",
          to: "import-map.json",
        },
        {
          from: "src/assets",
          to: "assets",
        },
      ]),
    ],
    externals: ["single-spa", /^@ceiba-software\/.+$/],
  });
};
