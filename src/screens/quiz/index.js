import React, { useEffect, useState } from "react";
import FinishView from "../../components/FinishView";
import { QuestionCard } from "../../components/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchExoplanet } from "../../redux/action/exoplanetAction";
import { fetchQuiz } from "../../redux/action/quizAction";
import { useRoute } from "@react-navigation/native";

export const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const route = useRoute();
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state?.quiz?.quizData?.quizData);
  useEffect(() => {
    fetchData();
  }, []);

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
    if (option === quiz[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return currentQuestion == quiz.length ? (
    <FinishView finalScore={score} />
  ) : (
    <QuestionCard
      question={quiz[currentQuestion]}
      onSelectOption={handleSelectOption}
      score={score}
      data={route?.params?.data}
    />
  );
};
