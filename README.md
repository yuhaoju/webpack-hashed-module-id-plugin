# webpack-hashed-module-id-plugin
Help making stable module id (compatible with Webpack 1 &amp; 2)

## Install
```
npm install webpack-hashed-module-id-plugin --save
```

## Usage
```
const HashedModuleIdsPlugin = require("webpack-hashed-module-id-plugin");

module.exports = {
  //...
  plugins: [
    new HashedModuleIdsPlugin(),
  ]
}
```
