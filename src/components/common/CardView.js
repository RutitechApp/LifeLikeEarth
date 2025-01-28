import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import imageConstants from "../../utils/imageConstants";
import FastImage from "react-native-fast-image";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import { Height, Width } from "../../utils/responsive";

const CardView = ({ data, onPress }) => {
  return (
    <ImageBackground
      source={imageConstants.eCardImage}
      style={style.imageBGStyle}
      resizeMode="stretch"
    >
      <FastImage
        source={{ uri: data?.planetImage }}
        style={style.imageStyle}
        resizeMode="contain"
      />
      <Text style={style.textStyle} numberOfLines={1}>
        {data?.planetName}
      </Text>
      <Text style={style.tStyle}>Discovery Year:</Text>
      <Text style={style.subTextStyle}>{data?.discoveryYear}</Text>
      <TouchableOpacity onPress={onPress}>
        <FastImage
          source={imageConstants.arrow}
          style={style.arrowStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default CardView;

const style = StyleSheet.create({
  imageBGStyle: {
    width: Width(182),
    height: Height(250),
    alignItems: "center",
    paddingVertical: Height(20),
    marginTop: Height(30),
    paddingHorizontal: Width(16),
  },
  imageStyle: {
    height: Height(113),
    width: Width(133),
  },
  textStyle: {
    fontSize: Height(20),
    fontFamily: fonts.SenBold,
    color: colors.white,
    marginTop: Height(8),
  },
  tStyle: {
    fontSize: Height(14),
    color: colors.white,
    fontFamily: fonts.SenRegular,
    opacity: 0.8,
  },
  subTextStyle: {
    fontSize: Height(12),
    color: colors.white,
    fontFamily: fonts.SenRegular,
    opacity: 0.5,
  },
  arrowStyle: {
    width: Width(42),
    height: Height(6),
    marginTop: Height(15),
  },
});
