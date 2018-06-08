const path = require('path');
const buildDirectory = path.resolve(__dirname, './dist/js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryPath = path.resolve(__dirname, 'app');

const mainPage = new HtmlWebpackPlugin({
  title: 'Hypatia',
  template: `${entryPath}/index.html`
});

const cssRule = {
  test: /\.scss$/,
  use: [
    { loader: 'style-loader' }, // creates style nodes from JS strings
    { loader: 'css-loader' }, // translates CSS into CommonJS
    { loader: 'sass-loader' } // compiles Sass to CSS
  ]
};

const jsRule = {
  test: /\.js$|jsx$/,
  include: entryPath,
  use: {
    loader: 'babel-loader',
    options: {
      babelrc: false,
      presets: [
        ['@babel/preset-env', {
          modules: false,
          targets: {
            browsers: 'last 5 Chrome versions'
          }
        }]
      ],
      plugins: [
        require('babel-plugin-relay'),
        require('babel-plugin-transform-react-jsx')
      ]
    }
  }
};

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: `${entryPath}/main.js`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [entryPath, "node_modules"]
  },
  output: {
    path: buildDirectory,
    publicPath: '/app',
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      jsRule,
      cssRule
    ]
  },
  plugins: [
    mainPage
  ]
};
