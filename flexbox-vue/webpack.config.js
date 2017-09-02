/*
* @Author: Marte
* @Date:   2017-09-01 23:58:44
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 09:44:45
*/

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/plugin/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    filename: 'flexbox-vue.js',
    library: 'flexbox-vue',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  node: {
    fs: "empty"
  },

  resolve: {
    extensions: ['.js', '.vue']
  },

  module: {
    loaders: [{
      test: /.\ue$/,
      loader: 'vue-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,

      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      }, {
        test: /.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url?limit=8192'
      }, {
        test: /\.(html|tpl)$/,
        loader: 'vue-html-loader'
      }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    new webpack.optimize.OccurrenceOrderPlugin()
  ],
}
