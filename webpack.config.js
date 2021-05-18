const path = require('path');

module.exports = {
  entry: {
  	base64  : './src/base64.js',
    chap1: './src/index.js',
    chap2: './src/chap2.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};