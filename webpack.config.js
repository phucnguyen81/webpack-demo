const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // remove output files before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg/,
        type: "asset/inline",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9010,
    devMiddleware: {
      writeToDisk: (filePath) => {
        return /index\.html$/.test(filePath);
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',  // output file
      template: 'src/index.html',  // input file
    }),
  ],
};
