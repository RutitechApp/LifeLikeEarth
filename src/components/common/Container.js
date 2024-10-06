import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import FastImage from "react-native-fast-image";
import imageConstants from "../../utils/imageConstants";

const Container = ({ children }) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={imageConstants.statGif}
        style={StyleSheet.absoluteFill}
      >
        <SafeAreaView style={styles.safeContainer}>{children}</SafeAreaView>
      </FastImage>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: 16,
  },
  safeContainer: {
    flex: 1,
  },
});
