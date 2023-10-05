/* eslint-disable func-names */
const path = require('path');
const pak = require('../../package.json');

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            react: './node_modules/react',
            'react-native': './node_modules/react-native-web',
            // For development, we want to alias the library to the source
            'lottie-react-native': path.join(__dirname, '../..', pak.source),
          },
        },
      ],
      '@babel/plugin-proposal-export-namespace-from',
    ],
  };
};
