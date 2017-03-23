const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
     path: path.resolve(__dirname, "dist"),
     filename: "app.bundle.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    })
  ],  
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },    
    {
      test:/\.less$/,
      loader: "style-loader!css-loader!less-loader"
    },
    {
      test: /.(png|gif|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, 
      loader: "url-loader?limit=100000&outputPath=img/"
    }]
  },
  devtool: "#source-map"
};