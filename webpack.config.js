var path= require("path")
var HtmlWebpackPlugin= require("html-webpack-plugin");

module.exports = {
    entry:'./src/app/index.js', 
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
  
    module: {
      rules: [{
        test: /\.js$/, // include .js files
        enforce: "pre", // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        use: [{
          loader: "babel-loader"
        }]
      }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
  };