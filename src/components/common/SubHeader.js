import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import iconConstants from "../../utils/iconConstants";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

const SubHeader = ({ title, onPress }) => {
  return (
    <View style={style.viewStyle}>
      <TouchableOpacity onPress={onPress}>
        <FastImage source={iconConstants.back} style={style.imageStyle} />
      </TouchableOpacity>
      <Text style={style.titleStyle}>{title}</Text>
      <TouchableOpacity>
        <Text>ABC</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubHeader;
const style = StyleSheet.create({
  titleStyle: {
    fontSize: 35,
    fontFamily: fonts.SpaceGroteskBold,
    color: colors.white,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  viewStyle: {
    flexDirection: "row",
    marginHorizontal: 24,
    justifyContent: "space-between",
  },
});
