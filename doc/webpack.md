# Default configs

- Looks for `src/index.js` as entry point
- From the entry point, follows the `import` statements to bundle all the files together
- Writes the bundle to `dist/main.js`

# Plugins

In webpack, `everything is a plugin`.
For example, `html-webpack-plugin` is used to generate an HTML file with the bundle injected.

```javascript
plugins: [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
],
```

# Dev Server

The plugin webpack-dev-server runs a development server with hot reloading and tons of other features.
Minimal configs:

```javascript
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8082,
  }
```

# Loaders

Loaders are used to transform files before they are added to the bundle.
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
