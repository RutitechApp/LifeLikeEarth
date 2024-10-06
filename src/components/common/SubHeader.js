import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import iconConstants from "../../utils/iconConstants";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

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
    fontSize: 30,
    fontFamily: fonts.SpaceGroteskBold,
    color: colors.white,
  },
  imageStyle: {
    height: 38,
    width: 38,
  },
  viewStyle: {
    flexDirection: "row",
    marginHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
