import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

module.exports = {
    mode: 'development',
    entry: {
        build: ['./assets/src/scripts/app/components/LanguageSelector/LanguageSelector.js'],
    },
    output: {
        path: path.resolve(__dirname, 'assets/dist'), // Note: Physical files are only output by the production build task `npm run build`.
        filename: '[name].bundle.js',
    }
}