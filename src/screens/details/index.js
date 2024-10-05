import React from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import iconConstants from "../../utils/iconConstants";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route?.params?.data;
  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity
        style={{ marginHorizontal: 34 }}
        onPress={() => navigation.goBack()}
      >
        <FastImage source={iconConstants.back} style={style.backImageStyle} />
      </TouchableOpacity>
      <FastImage source={{ uri: data?.planetImage }} style={style.imageStyle} />
    </SafeAreaView>
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
