const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const customConfig = {
  // Your custom Metro configuration options go here.
};

const config = mergeConfig(defaultConfig, customConfig);

// Wrap the final config with Reanimated's Metro configuration
module.exports = wrapWithReanimatedMetroConfig(config);
