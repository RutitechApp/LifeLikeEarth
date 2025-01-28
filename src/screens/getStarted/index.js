import React from "react";
import { Text, Image, StyleSheet, Pressable } from "react-native";
import Container from "../../components/common/Container";
import colors from "../../utils/colors";
import { Height, Width } from "../../utils/responsive";
import fonts from "../../utils/fonts";
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";
import navigationConstants from "../../utils/navigationConstants";
import iconConstants from "../../utils/iconConstants";
import imageConstants from "../../utils/imageConstants";
import contents from "../../utils/contents";

const GetStartedScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        source={imageConstants.getStarted}
        style={style.imageStyle}
        resizeMode="contain"
      />
      <Text style={style.textStyle}>{contents.LIFELIKEEARTH}</Text>
      <Pressable
        onPress={() => navigation.navigate(navigationConstants.SIGNIN)}
        style={style.btnStyle}
      >
        <FastImage
          source={iconConstants.arrowRight}
          style={style.btnImageStyle}
        />
      </Pressable>
    </Container>
  );
};

export default GetStartedScreen;

const style = StyleSheet.create({
  imageStyle: {
    height: Height(500),
    width: Width(500),
    alignSelf: "center",
  },
  textStyle: {
    fontSize: Height(40),
    color: colors.white,
    fontFamily: fonts.SpaceGroteskBold,
    textAlign: "center",
  },
  btnStyle: {
    height: Height(30),
    width: Width(100),
    marginTop: Height(150),
    alignSelf: "center",
  },
  btnImageStyle: {
    height: Height(30),
    width: Width(100),
    alignSelf: "center",
  },
});
