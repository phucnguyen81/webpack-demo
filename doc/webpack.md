# webpack without configs

- Looks for `src/index.js` as entry point
- From the entry point, follows the `import` statements to bundle all the files together
- Writes the bundle to `dist/main.js`

# webpack-dev-server

Run a development server with hot reloading and tons of other features.
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
