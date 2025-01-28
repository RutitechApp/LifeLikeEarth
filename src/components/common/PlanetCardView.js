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

const PlanetCardView = ({ data, onPress }) => {
  return (
    <ImageBackground
      source={imageConstants.capCard}
      style={style.imageBGStyle}
      resizeMode="stretch"
    >
      <FastImage
        source={{ uri: data?.image }}
        style={style.imageStyle}
        resizeMode="contain"
      />
      <Text style={style.textStyle} numberOfLines={1}>
        {data?.plantName}
      </Text>
      <Text style={style.tStyle}>{data?.plantType}</Text>
      <Text style={style.subTextStyle} numberOfLines={2}>
        {data?.description}
      </Text>
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

export default PlanetCardView;

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
    marginHorizontal: Width(12),
  },
  arrowStyle: {
    width: Width(42),
    height: Height(6),
    marginTop: Height(15),
  },
});
