import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoadingScreen from "../screens/onBoading";
import navigationConstants from "../utils/navigationConstants";
import HomeScreen from "../screens/home";
import DetailsScreen from "../screens/details";
import ListScreen from "../screens/list";
import QuizScreen from "../screens/quiz";
import RewardsScreen from "../screens/rewards";

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
    </Stack.Navigator>
  );
};

export default StackNavigation;
