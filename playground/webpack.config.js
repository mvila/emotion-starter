const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  return {
    // The entry point of the app is './src/index.tsx'
    entry: './src/index.tsx',
    output: {
      // Specify '/' as the base path for all the assets
      // This is required for a single-page application
      publicPath: '/'
    },
    module: {
      rules: [
        {
          // Use 'ts-loader' to compile the TS files
          test: /\.tsx?$/,
          include: path.join(__dirname, 'src'),
          loader: 'ts-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      // Use 'html-webpack-plugin' to generate the 'index.html' file
      // from the './src/index.ejs' template
      new HtmlWebPackPlugin({
        template: './src/index.ejs',
        inject: false
      })
    ],
    // Generate source maps to make debugging easier
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      port: 8080,
      // Fallback to 'index.html' in case of 404 responses
      // This is required for a single-page application
      historyApiFallback: true
    }
  };
};
