import React, { useEffect } from "react";
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
import GetStartedScreen from "../screens/getStarted";
import SignInScreen from "../screens/signIn";
import SignUpScreen from "../screens/signUp";
import ForgotPasswordScreen from "../screens/forgotPassword";
import VerifyOtpScreen from "../screens/verifyOtp";
import NewPasswordScreen from "../screens/newPassword";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import FinishScreen from "../screens/finish";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  const navigation = useNavigation();
  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      navigation.navigate(navigationConstants.HOME);
      return true;
    } else {
      navigation.navigate(navigationConstants.SIGNIN);
      return false;
    }
  };
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={
        getUserInfo() ? navigationConstants.HOME : navigationConstants.SIGNIN
      }
    >
      <Stack.Screen
        name={navigationConstants.GETSTARTED}
        component={GetStartedScreen}
      />
      <Stack.Screen
        name={navigationConstants.SIGNIN}
        component={SignInScreen}
      />
      <Stack.Screen
        name={navigationConstants.ONBOADING}
        component={OnBoadingScreen}
      />
      <Stack.Screen
        name={navigationConstants.SIGNUP}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={navigationConstants.FORGOTPASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={navigationConstants.VERIFYOTP}
        component={VerifyOtpScreen}
      />
      <Stack.Screen
        name={navigationConstants.NEWPASSWORD}
        component={NewPasswordScreen}
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
      <Stack.Screen
        name={navigationConstants.FINISH}
        component={FinishScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
