module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'], // Root of the project
        alias: {
          assets: './assets', // Alias for the assets folder
        },
      },
    ],
    'react-native-reanimated/plugin', // for Reanimated support
  ],
};
