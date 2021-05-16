const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  entry: './src/chap2.js',
  output: {
    filename: 'chap2.js',
    path: path.resolve(__dirname, 'dist'),
  },
};