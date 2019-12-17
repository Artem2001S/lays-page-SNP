// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: './src/app.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.js'
//   },

//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: './dist'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.scss/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader',
//         ],
//       },
//       // {
//       //   test: /\.(jpg|png|jpeg)$/,
//       //   exclude: /node_modules/,
//       //   loader: 'file-loader',
//       //   options: {
//       //     // outputPath: './assets/img',
//       //     publicPath: './assets/img/',
//       //     name: './assets/img/[name].[ext]',
//       //   }
//       // },
//       {
//         test: /\.(jpg|png|jpeg)$/,
//         exclude: /node_modules/,
//         loader: 'file-loader',
//         options: {
//           publicPath: './assets/img/',
//           name: './assets/img/[name].[ext]',
//         }
//       },
//       {
//         test: /\.(ttf|eot)$/,
//         exclude: /node_modules/,
//         loader: 'file-loader',
//         options: {
//           publicPath: './assets/fonts/',
//           name: './assets/fonts/[name].[ext]',
//         }
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       filename: 'index.html',
//     }),

//   ]
// }

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
        test: /\.(ttf|eot)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          publicPath: './assets/fonts/',
          name: './assets/fonts/[name].[ext]',
          limit: 1000
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
