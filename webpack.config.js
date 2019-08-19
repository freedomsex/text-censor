module.exports = {
  output: {
    library: 'Censor',
    globalObject: 'this',
    filename: "Censor.js",
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
