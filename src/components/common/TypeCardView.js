import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import iconConstants from "../../utils/iconConstants";
import imageConstants from "../../utils/imageConstants";

const TypeCardView = ({ data, index, onPress }) => {
  return (
    <ImageBackground
      source={imageConstants.card}
      style={[
        style.viewStyle,
        {
          marginEnd: index % 2 === 0 ? 5 : 0,
          marginLeft: index % 2 === 0 ? 0 : 5,
        },
      ]}
      resizeMode="contain"
    >
      <View>
        <Text style={style.textStyle}>{data?.name}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <FastImage
            source={data?.image}
            style={{
              height: data?.id === 2 ? 100 : data?.id === 4 ? 120 : 110,
              aspectRatio: 1 / 1,
              left: index % 2 === 0 ? -40 : data?.id === 2 ? 75 : 65,
              top: -5,
            }}
            resizeMode="stretch"
          />
          <TouchableOpacity
            style={{
              position: index % 2 === 0 ? "relative" : "absolute",
              right: data?.id % 2 === 1 ? 0 : undefined,
              bottom:
                data?.id % 2 === 1 ? -10 : data?.id == 2 ? -20 : undefined,
            }}
            onPress={onPress}
          >
            <FastImage
              source={iconConstants.forward}
              style={{
                height: 26,
                width: 26,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TypeCardView;

const style = StyleSheet.create({
  viewStyle: {
    height: 176,
    width: Dimensions.get("screen").width / 2.5,
    paddingHorizontal: 10,
    marginTop: 15,
    alignSelf: "center",
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.SenBold,
    lineHeight: 41,
    marginTop: 6,
    textAlign: "center",
  },
});
