const path = require("path");
const DefinePlugin = require("webpack").DefinePlugin;
const UglifyJsPlugin = require("webpack").optimize.UglifyJsPlugin;
const CommonsChunkPlugin = require("webpack").optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssnano = require("cssnano");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  entry: {
    "app.bundle": "./src/index.js"
  },
  output: {
     path: path.resolve(__dirname, "dist"),
     filename: "[name].js"
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
        use: "url-loader?name=[name].[ext]&limit=100000&outputPath=img/&publicPath=img/"
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),  
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
    new ExtractTextPlugin("[name].css"),
    new OptimizeCssAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: { 
        discardComments: {
          removeAll: false 
        } 
      },
      canPrint: true
    }),   
    new ImageminPlugin({
      test: /img\/[^\/]+\.(jpe?g|png|gif|svg)$/,
      jpegtran: {
        progressive: true
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],      
  devtool: "#source-map"
};