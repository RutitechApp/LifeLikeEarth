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

const CardView = ({ data, onPress }) => {
  return (
    <ImageBackground
      source={imageConstants.eCardImage}
      style={style.imageBGStyle}
      resizeMode="contain"
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
    width: 182,
    height: 242,
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 30,
    paddingHorizontal: 16,
  },
  imageStyle: {
    height: 113,
    width: 133,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: fonts.SpaceGroteskBold,
    color: colors.white,
    marginTop: 8,
  },
  tStyle: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.SpaceGroteskRegular,
    opacity: 0.8,
  },
  subTextStyle: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fonts.SpaceGroteskLight,
    opacity: 0.5,
  },
  arrowStyle: {
    width: 42,
    height: 6,
    marginTop: 15,
  },
});
