import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import navigationConstants from "../../utils/navigationConstants";
import { useDispatch, useSelector } from "react-redux";
import { fetchExoplanet } from "../../redux/action/exoplanetAction";
import { fetchQuiz } from "../../redux/action/quizAction";

const OnBoadingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.exoplanet?.exoplanetData);
  const quiz = useSelector((state) => state?.quiz?.quizData);
  console.log("quiz", quiz);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(fetchExoplanet());
    const obj = {
      id: "66f28062e81a4c7efbc49994",
      onSuccess: () => {},
      onFail: () => {},
    };
    dispatch(fetchQuiz(obj));
  };

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
