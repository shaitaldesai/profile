const path = require('path');
const webpack = require("webpack");

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/public/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: "development",
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include : SRC_DIR,
        use: {
          loader : 'babel-loader',                
        },
      },
      {
        test: /\.css$/,
        // include: path.join(__dirname + "./client/src/css"),
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        },

      },
      // {
      //   test: /\.(jpg|png|gif|svg|pdf|ico)$/,
      //   use: [{
      //       loader: 'file-loader',
      //       options: {
      //           name: '[path][name]-[hash:8].[ext]'
      //       },
      //   }],
      //   include: [
      //     path.resolve(__dirname, "client/public/images")
      //   ],
      // },       
    ]
  }
};
