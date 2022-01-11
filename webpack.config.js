const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    static: "./build",
    port: 5500,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.join(__dirname, "src"), "node_modules"],
    alias: {
      react: path.join(__dirname, "node_modules", "react"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      // Optimize auto CSS Loading
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // Handle Images
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
        use: ["file-loader"],
      },
      // {
      //   test: /\.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 8192, // in bytes
      //       },
      //     },
      //   ],
      // },
    ],
  },
  // resolve: { extensions: [".tsx", ".ts", ".js", ".jsx"] },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      favicon: "./src/images/favicon.ico",
    }),
    new MiniCssExtractPlugin(),
  ],
};
