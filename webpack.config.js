var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
     path: path.resolve(__dirname, "dist"),
     publicPath: "/assets/",
     filename: "app.bundle.js",
  },
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