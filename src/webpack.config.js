// webpack.config.js

const path = require('path');

module.exports = {
  // Autres configurations Webpack

  resolve: {
    extensions: ['.js', '.jsx'], // Ajoutez '.jsx' si vous utilisez des fichiers JSX
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
