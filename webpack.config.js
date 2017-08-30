const path = require("path");

module.exports = {
  entry: {
    app: `./src/index.js`
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-2'
          ]
        }
      },
      {
       test: /\.svg$/i,
       loader: 'file-loader?name=assets/spritesheet/svg/[name].[ext]'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000
  }
};
