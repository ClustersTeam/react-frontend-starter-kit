import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    mode: 'development',
    entry: {
        'scripts/components/LanguageSelector': './assets/src/scripts/app/components/LanguageSelector/LanguageSelector.js',
    },
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
}