import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { OnBoadingData } from "../../helper/dummyData";
import colors from "../../utils/colors";
import Button from "../../components/common/Button";
import { useNavigation } from "@react-navigation/native";
import navigationConstants from "../../utils/navigationConstants";
import fonts from "../../utils/fonts";

const OnBoadingScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);

  return (
    <ImageBackground
      source={OnBoadingData?.[index]?.imageUrl}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={style.textStyle}>{OnBoadingData?.[index].title}</Text>
        <Text style={style.subTextStyle}>{OnBoadingData?.[index].desc}</Text>
        <Button
          title={index === 2 ? "Get Started" : "Next"}
          buttonStyle={{ marginTop: 60 }}
          onPress={() => {
            index === 2
              ? navigation.navigate(navigationConstants.HOME)
              : setIndex(index + 1);
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OnBoadingScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: 342,
    width: 342,
    alignSelf: "center",
    marginTop: 130,
  },
  textStyle: {
    color: colors.white,
    fontSize: 32,
    fontFamily: fonts.SpaceGroteskBold,
    lineHeight: 44,
    textAlign: "center",
    marginTop: 50,
    marginHorizontal: 5,
  },
  subTextStyle: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.SpaceGroteskBold,
    textAlign: "center",
    marginTop: 450,
    lineHeight: 28,
  },
});
