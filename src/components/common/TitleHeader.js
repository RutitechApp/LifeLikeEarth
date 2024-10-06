import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import FastImage from "react-native-fast-image";
import iconConstants from "../../utils/iconConstants";

const TitleHeader = ({ title, onPress, container }) => {
  return (
    <View style={[style.container, container]}>
      <Text style={style.titleStyle}>{title}</Text>
      <TouchableOpacity onPress={onPress} style={style.viewStyle}>
        <Text style={style.textStyle}>Explore</Text>
        <FastImage source={iconConstants.right} style={style.imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default TitleHeader;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ic_notification: {
    height: 50,
    width: 50,
  },
  titleStyle: {
    fontSize: 20,
    fontFamily: fonts.CrimsonTextBold,
    color: colors.white,
  },
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 16,
    color: "#1E59CC",
    textDecorationLine: "underline",
    fontFamily: fonts.SpaceGroteskRegular,
  },
  imageStyle: {
    height: 15,
    width: 15,
  },
});
