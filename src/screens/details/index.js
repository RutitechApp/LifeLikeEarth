import React from "react";
import {  StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import iconConstants from "../../utils/iconConstants";
import Container from "../../components/common/Container";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route?.params?.data;
  return (
    <Container >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <FastImage source={iconConstants.back} style={style.backImageStyle} />
      </TouchableOpacity>
      <FastImage source={{ uri: data?.planetImage }} style={style.imageStyle} />
    </Container>
  );
};

export default DetailsScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  backImageStyle: {
    height: 43,
    width: 43,
  },
  imageStyle: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
});
