const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(html)/,
        loader: 'html-loader',
        options: {
          esModule: false
        }
      },

      {
        test: /\.(jpg|png|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './assets/img',
              outputPath: './assets/img/',
              name: '[folder]/[name].[ext]',
              esModule: false
            }
          }
        ]
      },

      {
        test: /\.(woff|eot|otf|ttf|truetype)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          publicPath: './assets/fonts/',
          outputPath: './assets/fonts/',
          name: '[name].[ext]',
          esModule: false
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),

  ]
}
