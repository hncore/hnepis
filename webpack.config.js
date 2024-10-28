import path from 'path';
import webpack from 'webpack';

export default {
  mode: 'development',
  entry: './resources/assets/js/hnmg-player.js',
  output: {
    path: path.resolve('resources/assets/js'),
    filename: 'hnmgplayer.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [],
};