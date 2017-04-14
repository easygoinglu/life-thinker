const path = require("path");
const CommonsChunkPlugin = require("webpack").optimize.CommonsChunkPlugin;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "app.bundle": "./src/index.js"
  },
  output: {
     path: path.resolve(__dirname, "dist"),
     publicPath: "/public/",
     filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },    
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      },  
      {
        test: /.(png|gif|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, 
        use: "url-loader?name=[name].[ext]&limit=100000&outputpath=img/&publicpath=img/"
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
        name: "vendor.bundle",
        minChunks: function (module) {
          return module.context && module.context.indexOf("node_modules") !== -1;
        }       
    }),
    new CopyWebpackPlugin([{ 
        from: "./src/img", 
        to: "./img" 
    }]),      
    new ExtractTextPlugin("[name].css")
  ],
  devtool: "eval"
};