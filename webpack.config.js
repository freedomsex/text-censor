const path = require('path');
const merge = require('webpack-merge');

var config = {
  output: {   
    filename: "[name].js", 
    libraryTarget: "umd"
  },

  module: {
    rules: [ 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

var PluginsConfig = merge(config, {
  output: {
    path: path.resolve(__dirname, 'dist/plugins'),
  }, 
});

var Censor = merge(config, {
  name: "Censor",
  output: {
    library: 'Censor',
    globalObject: 'this',
    filename: "Censor.js", 
  }, 
});

var PurifyRuCensor = merge(PluginsConfig, {
  entry: "./src/plugins/PurifyRuCensor.js", 
  output: {
    filename: "PurifyRuCensor.js", 
  },
});
var NumbersSayCensor = merge(PluginsConfig, {
  entry: "./src/plugins/NumbersSayCensor.js", 
  output: {
    filename: "NumbersSayCensor.js", 
  },
});

module.exports = [
  Censor,
  PurifyRuCensor,
  NumbersSayCensor,
];