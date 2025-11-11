module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Adicione esta linha
      'react-native-reanimated/plugin',
    ],
  };
};