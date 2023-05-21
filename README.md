# Description

Webpack lab for learning and experimentation.

# Default configs

- Looks for `src/index.js` as entry point
- From the entry point, follows the `import` statements to bundle all the files together
- Writes the bundle to `dist/main.js`

# Plugins

In webpack, _everything is a plugin_.
For example, `html-webpack-plugin` is used to generate an HTML file with the bundle injected.

```javascript
plugins: [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
],
```

# Loaders

Loaders are plugins used to transform files before they are added to the bundle.
For example, `babel-loader` is used to transform ES6+ code to ES5.

NOTE: sometimes if we don't see a resource gets served, the corresponding loader might be missing.
For example, `ttf` fonts are not served by default event if with type `asset/resource`.

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
  ],
},
```

# Dev Server

The plugin webpack-dev-server runs a development server with hot reloading and tons of other features.

Example configs:

```javascript
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8082,
    devMiddleware: { // required webpack-dev-middleware
      writeToDisk: (filePath) => {
        return /index\.html$/.test(filePath);
      },
    },
  }
```

# Dev Server Middlewares

The `webpack-dev-middleware` plugin customizes the `webpack-dev-server` with middlewares.
The middlwares can also be added to a custom server for development purposes.

Example of a custom `express` server:

```javascript
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath, // configured inside webpack.config.js
  })
);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

# HTML plugin

The plugin `html-webpack-plugin` is used to generate an HTML file with the bundle injected.

Note that we can use `html-webpack-harddisk-plugin` to let the dev server picks up the changes.
However, this is already covered by the `writeToDisk` config in `webpack-dev-middleware`.

Example configs:

```javascript
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',  // output file
      template: 'src/index.html',  // input file
    }),
  ],
```
