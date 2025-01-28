import React, { useEffect, useState } from "react";
import { QuestionCard } from "../../components/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchExoplanet } from "../../redux/action/exoplanetAction";
import { fetchQuiz } from "../../redux/action/quizAction";
import { useNavigation, useRoute } from "@react-navigation/native";
import { questions } from "../../helper/dummyData";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import Container from "../../components/common/Container";
import { Height, Width } from "../../utils/responsive";
import FastImage from "react-native-fast-image";
import iconConstants from "../../utils/iconConstants";
import navigationConstants from "../../utils/navigationConstants";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

export const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const quiz = useSelector((state) => state?.quiz?.quizData?.quizData);
  const quizItems = quiz ? quiz : questions;

  useEffect(() => {
    route?.params?.data && fetchData();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const fetchData = () => {
    dispatch(fetchExoplanet());
    const obj = {
      id: route?.params?.data?._id,
      onSuccess: () => {},
      onFail: () => {},
    };
    dispatch(fetchQuiz(obj));
  };

  const handleSelectOption = (option) => {
    if (option === quizItems[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizItems.length) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(30);
    } else {
      navigation.navigate(navigationConstants.FINISH, { data: score });
    }
  };

  const completedProgress = currentQuestion / quizItems.length;
  const remainingProgress =
    (quizItems.length - currentQuestion) / quizItems.length;
  const remainingQuestions = (quizItems.length - currentQuestion)
    .toString()
    .padStart(2, "0");

  const circularProgress = timeLeft / 30;
  const formattedQuestionNumber = (currentQuestion + 1)
    .toString()
    .padStart(2, "0");

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FastImage source={iconConstants.back} style={styles.backImageStyle} />
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          marginTop: Height(50),
          borderRadius: Width(20),
          marginHorizontal: Width(20),
        }}
      >
        <View style={styles.progressContainer}>
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>
              {formattedQuestionNumber - 1}
            </Text>
            <Progress.Bar
              progress={completedProgress}
              width={Width(120)}
              height={10}
              color="#1F8435"
              borderRadius={5}
              borderWidth={0}
            />
          </View>

          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>{remainingQuestions}</Text>
            <Progress.Bar
              progress={remainingProgress}
              width={Width(120)}
              height={10}
              color="#D05A04"
              borderRadius={5}
              borderWidth={0}
            />
          </View>
        </View>
        <Text
          style={{
            color: colors.secondary,
            alignSelf: "center",
            textAlign: "center",
            fontSize: Height(25),
            fontFamily: fonts.SenSemiBold,
            marginTop: Height(20),
          }}
        >
          Question {formattedQuestionNumber} / {quizItems.length}
        </Text>
        <Text
          style={{
            color: colors.white,
            fontSize: Height(25),
            fontFamily: fonts.SenMedium,
            textAlign: "center",
            padding: Width(20),
          }}
        >
          {quizItems[currentQuestion]?.question}
        </Text>
      </View>

      <View style={styles.timerContainer}>
        <Progress.Circle
          size={80}
          progress={circularProgress}
          thickness={6}
          color="#4e4376"
          showsText
          borderColor={"transparent"}
          formatText={() => `${timeLeft}`}
          textStyle={styles.timerText}
        />
      </View>

      <QuestionCard
        question={quizItems[currentQuestion]}
        onSelectOption={handleSelectOption}
        score={score}
        data={route?.params?.data}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: Width(20),
    marginTop: Height(10),
  },
  progressItem: {
    alignItems: "center",
  },
  progressLabel: {
    fontSize: Height(16),
    color: "white",
    marginBottom: Height(5),
    fontFamily: fonts.SenMedium,
  },
  backImageStyle: {
    height: Height(45),
    width: Height(45),
    marginHorizontal: Width(24),
    marginTop: Height(20),
  },
  timerContainer: {
    alignSelf: "center",
    marginVertical: Height(20),
    position: "absolute",
    backgroundColor: "black",
    padding: Width(10),
    borderRadius: Width(100),
    top: Height(100),
  },
  timerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2b5876",
  },
});
