import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, SafeAreaView } from "react-native";
import navigationConstants from "../../utils/navigationConstants";

const OnBoadingScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate(navigationConstants.HOME)}>
        HOME
      </Text>
      <Text onPress={() => navigation.navigate(navigationConstants.LIST)}>
        Exoplanet List
      </Text>
      <Text onPress={() => navigation.navigate(navigationConstants.DETAILS)}>
        Details of exoplanet
      </Text>
      <Text onPress={() => navigation.navigate(navigationConstants.QUIZ)}>
        Quiz
      </Text>
      <Text onPress={() => navigation.navigate(navigationConstants.REWARDS)}>
        Rewards
      </Text>
    </SafeAreaView>
  );
};

export default OnBoadingScreen;
