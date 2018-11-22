import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import {entry} from './tools/config.entry';

export default {
  resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
  },
  mode: 'development',
  entry,
  output: {
      path: path.resolve(__dirname, 'assets/dist'), // Note: Physical files are only output by the production build task `npm run build`.
      filename: '[name].js',
  },
  plugins: [
    // new HardSourceWebpackPlugin(), Node verion >= 8
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'assets/src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
           'style-loader',
           {
             loader: 'css-loader',
             options: {
               sourceMap: true
             }
           }, {
             loader: 'postcss-loader',
             options: {
               plugins: () => [
                 require('autoprefixer')
               ],
               sourceMap: true
             }
           }, {
             loader: 'sass-loader',
             options: {
               includePaths: [path.resolve(__dirname, 'assets/src/styles')],
               sourceMap: true
             }
           }
         ]
       }
    ]
  },
}
