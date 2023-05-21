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
  }
```

# HTML plugin

The plugin `html-webpack-plugin` is used to generate an HTML file with the bundle injected.
Note that we need to use `html-webpack-harddisk-plugin` to let the dev server picks up the changes.

Example configs:

```javascript
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',  // name of output file
      template: 'src/index.html',  // name of input file
      alwaysWriteToDisk: true,  // write to disk before the next middlewares run
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
```
