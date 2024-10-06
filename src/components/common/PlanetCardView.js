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

const PlanetCardView = ({ data, onPress }) => {
  return (
    <ImageBackground
      source={imageConstants.capCard}
      style={style.imageBGStyle}
      resizeMode="contain"
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
      <Text style={style.subTextStyle} numberOfLines={3}>
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
    width: 182,
    height: 293,
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
    fontSize: 11,
    color: colors.white,
    fontFamily: fonts.CrimsonTextBold,
    lineHeight: 22,
    textAlign: "center",
  },
  arrowStyle: {
    width: 42,
    height: 6,
    marginTop: 15,
  },
});
