const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname);
const root = path.resolve(__dirname, '../../packages/core/');
console.log('root', root);
const {presets} = require(`${appDirectory}/babel.config.js`);

const {resolver} = require('./metro.config.js');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const compileNodeModules = [
  // Add every react-native package that needs compiling
  // 'react-native-gesture-handler',
  // 'lottie-react-native',
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.js$|tsx?$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, 'index.web.js'), // Entry to your application
    // path.resolve(__dirname, 'App.web.tsx'), // Change this to your main App file
    path.resolve(__dirname, 'src'),
    // path.resolve(__dirname, 'node_modules/lottie-react-native'),
    root,
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins: ['react-native-web'],
    },
  },
};

module.exports = {
  mode: 'development',
  entry: {
    app: './index.web.js',
  },
  stats: {warnings: false},
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'rnw_blogpost.bundle.js',
  },
  resolve: {
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.js',
      '.js',
      '.lottie',
      '.json',
    ],
    alias: {
      ...resolver.extraNodeModules,
      'react-native$': 'react-native-web',
    },
    symlinks: false,
    modules: ['node_modules', 'src'],
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      {
        test: /\.lottie$/,
        type: 'asset/resource',
      },
    ],
  },
  watch: true,
  watchOptions: {
    followSymlinks: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // See: https://github.com/necolas/react-native-web/issues/349
      __DEV__: JSON.stringify(true),
    }),
  ],
};
