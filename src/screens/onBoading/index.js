import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import { OnBoadingData } from "../../helper/dummyData";
import colors from "../../utils/colors";
import FastImage from "react-native-fast-image";
import Button from "../../components/common/Button";
import { useNavigation } from "@react-navigation/native";
import navigationConstants from "../../utils/navigationConstants";
import fonts from "../../utils/fonts";

const OnBoadingScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={style.container}>
      <FastImage
        source={OnBoadingData?.[index]?.imageUrl}
        style={style.imageStyle}
      />
      <Text style={style.textStyle}>{OnBoadingData?.[index].title}</Text>
      <Text style={style.subTextStyle}>{OnBoadingData?.[index].desc}</Text>
      <Button
        title={index === 2 ? "Get Started" : "Next"}
        buttonStyle={{ marginTop: 70 }}
        onPress={() => {
          index === 2
            ? navigation.navigate(navigationConstants.HOME)
            : setIndex(index + 1);
        }}
      />
    </SafeAreaView>
  );
};

export default OnBoadingScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageStyle: {
    height: 342,
    width: 342,
    alignSelf: "center",
    marginTop: 145,
  },
  textStyle: {
    color: colors.white,
    fontSize: 32,
    fontFamily: fonts.CrimsonTextBold,
    lineHeight: 40,
    textAlign: "center",
    marginTop: 110,
  },
  subTextStyle: {
    color: colors.white,
    fontSize: 22,
    fontFamily: fonts.CrimsonTextItalic,
    textAlign: "center",
    opacity: 0.5,
  },
});
