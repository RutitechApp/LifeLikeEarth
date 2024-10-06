import React from "react";
import { StyleSheet, Text } from "react-native";
import Container from "../../components/common/Container";
import { useNavigation, useRoute } from "@react-navigation/native";
import SubHeader from "../../components/common/SubHeader";
import FastImage from "react-native-fast-image";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

const PalnetScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = route?.params?.data;
  return (
    <Container>
      <SubHeader title={data?.plantName} onPress={() => navigation.goBack()} />
      <FastImage
        source={{ uri: data?.image }}
        style={style.imageStyle}
        resizeMode="contain"
      />
      <Text style={style.planetTypeStyle}>{data?.plantType}</Text>
      <Text style={style.planetNameStyle}>{data?.plantName}</Text>
      <Text style={style.descriptionStyle}>{data?.description}</Text>
    </Container>
  );
};

export default PalnetScreen;
const style = StyleSheet.create({
  planetNameStyle: {
    fontSize: 32,
    color: colors.white,
    fontFamily: fonts.SpaceGroteskBold,
    textAlign: "center",
  },
  planetTypeStyle: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.SpaceGroteskSemiBold,
    textAlign: "center",
    opacity: 0.4,
    marginTop: 14,
  },
  descriptionStyle: {
    fontSize: 14,
    fontFamily: fonts.SpaceGroteskMedium,
    color: colors.white,
    textAlign: "justify",
    lineHeight: 22,
    marginTop: 20,
    marginHorizontal: 23,
  },
  imageStyle: {
    height: 216,
    width: 214,
    alignSelf: "center",
    marginTop: 40,
  },
});
