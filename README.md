# webpack-hashed-module-id-plugin
Help creating stable module id (compatible with Webpack 1 &amp; 2)

## Install
```shell
npm install webpack-hashed-module-id-plugin --save
```

## Usage

Modify webpack.config.js:

```js
const HashedModuleIdsPlugin = require("webpack-hashed-module-id-plugin");

module.exports = {
  //...
  plugins: [
    new HashedModuleIdsPlugin()
  ]
}
```
