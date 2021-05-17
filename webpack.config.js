const path = require('path');

module.exports = {
  entry: {
    chap1: './src/index.js',
    chap2: './src/chap2.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};