import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import iconConstants from "../../utils/iconConstants";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import { Height, Width } from "../../utils/responsive";

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
    fontSize: Height(35),
    fontFamily: fonts.SenBold,
    color: colors.white,
  },
  imageStyle: {
    height: Height(45),
    width: Height(45),
  },
  viewStyle: {
    flexDirection: "row",
    marginHorizontal: Width(24),
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Height(20),
  },
});
