export const presets = ['module:@react-native/babel-preset'];
export const plugins = [
  [
    'module-resolver',
    {
      root: ['./'],
      alias: {
        assets: './assets', // Alias for the assets folder
      },
    },
  ],
  'react-native-reanimated/plugin', // for Reanimated support
];
