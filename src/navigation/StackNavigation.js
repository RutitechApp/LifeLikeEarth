import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoadingScreen from "../screens/onBoading";
import navigationConstants from "../utils/navigationConstants";
import HomeScreen from "../screens/home";
import DetailsScreen from "../screens/details";
import ListScreen from "../screens/list";
import RewardsScreen from "../screens/rewards";
import { QuizScreen } from "../screens/quiz";
import PassPortScreen from "../screens/passPort";
import PalnetScreen from "../screens/planet";
import SpaceScreen from "../screens/space";
import PassPortListScreen from "../screens/passportList";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={navigationConstants.ONBOADING}
        component={OnBoadingScreen}
      />
      <Stack.Screen name={navigationConstants.HOME} component={HomeScreen} />
      <Stack.Screen name={navigationConstants.LIST} component={ListScreen} />
      <Stack.Screen
        name={navigationConstants.DETAILS}
        component={DetailsScreen}
      />
      <Stack.Screen name={navigationConstants.QUIZ} component={QuizScreen} />
      <Stack.Screen
        name={navigationConstants.REWARDS}
        component={RewardsScreen}
      />
      <Stack.Screen
        name={navigationConstants.PASSPORT}
        component={PassPortScreen}
      />
      <Stack.Screen
        name={navigationConstants.PLANET}
        component={PalnetScreen}
      />
      <Stack.Screen name={navigationConstants.SPACE} component={SpaceScreen} />
      <Stack.Screen
        name={navigationConstants.PASSPORTLIST}
        component={PassPortListScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
