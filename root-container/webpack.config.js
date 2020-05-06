const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("./webpack/config-single-spa-ts");
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
      polyfills: path.resolve(__dirname, "src") + "/polyfills.ts",
      index: path.resolve(__dirname, "src") + "/index.ts",
      "root-page": path.resolve(__dirname, "src") + "/apps/root-page.ts",
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
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
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  });
};
