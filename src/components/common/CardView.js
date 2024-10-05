import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import iconConstants from "../../utils/iconConstants";
import FastImage from "react-native-fast-image";

const CardView = ({ data, onPress }) => {
  return (
    <View style={style.viewStyle}>
      <View style={style.subViewStyle}>
        <View style={style.rowViewStyle}>
          <View>
            <Text style={style.textStyle}>{data?.planetName}</Text>
            <Text style={style.subTextStyle}>Super-Earth</Text>
          </View>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={iconConstants.right}
              style={style.rightImageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.upViewStyle}>
        <FastImage
          source={{ uri: data?.planetImage }}
          style={style.iStyle}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default CardView;

const style = StyleSheet.create({
  viewStyle: {
    height: 306,
    width: 237.61,
  },
  subViewStyle: {
    position: "absolute",
    bottom: 10,
    height: 238,
    width: "100%",
    borderRadius: 15,
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.07)",
    backgroundColor: "#121212",
    paddingHorizontal: 20,
  },
  rowViewStyle: {
    flexDirection: "row",
    marginTop: 158,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fonts.CrimsonTextBold,
    marginTop: 10,
  },
  subTextStyle: {
    fontSize: 16,
    fontFamily: fonts.CrimsonTextSemiBold,
    color: colors.white,
    opacity: 0.7,
  },
  rightImageStyle: {
    width: 34,
    height: 34,
  },
  upViewStyle: {
    position: "absolute",
    top: 10,
    alignSelf: "center",
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
  },
  iStyle: {
    height: 200,
    width: 200,
  },
});
