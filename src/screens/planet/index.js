import React from "react";
import { StyleSheet, Text } from "react-native";
import Container from "../../components/common/Container";
import { useNavigation, useRoute } from "@react-navigation/native";
import SubHeader from "../../components/common/SubHeader";
import FastImage from "react-native-fast-image";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import { Height } from "../../utils/responsive";

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
    fontSize: Height(32),
    color: colors.white,
    fontFamily: fonts.SenBold,
    textAlign: "center",
  },
  planetTypeStyle: {
    fontSize: Height(20),
    color: colors.white,
    fontFamily: fonts.SenSemiBold,
    textAlign: "center",
    opacity: 0.4,
    marginTop: Height(14),
  },
  descriptionStyle: {
    fontSize: Height(14),
    fontFamily: fonts.SenMedium,
    color: colors.white,
    textAlign: "justify",
    lineHeight: Height(22),
    marginTop: Height(20),
    marginHorizontal: Height(23),
  },
  imageStyle: {
    height: Height(216),
    width: Height(214),
    alignSelf: "center",
    marginTop: Height(40),
  },
});
