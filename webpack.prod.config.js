var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/main/index.tsx",
  },
  output: {
    filename: "js/app.[name].js",
    path: __dirname + "/webroot/dist/"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "awesome-typescript-loader",
      },
      { test: /\.jsx?$/, exclude: /localforage/, loader: "babel-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { 
              loader: "css-loader",
              options: { minimize: true }
            },   // translates CSS into CommonJS
            { loader: "postcss-loader" },
            {
              loader: "sass-loader",  // compiles Sass to CSS
              options: {
                includePaths: ["node_modules/foundation-sites/scss"]
              }
            },
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader" },   // translates CSS into CommonJS
            { loader: "postcss-loader" },
          ]
        })
      },
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new ExtractTextPlugin("css/main.[name].css"),
    // new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en-ca|fr-ca)$/),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ]
}