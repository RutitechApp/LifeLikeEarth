import React from "react";
import { View, Text, FlatList, Dimensions, StyleSheet } from "react-native";
import { questions } from "../helper/dummyData";
import colors from "../utils/colors";
import { OptionButton } from "./OptionButton";
import fonts from "../utils/fonts";
import { Width } from "../utils/responsive";

export const QuestionCard = ({ question, onSelectOption, score }) => {
  const screenDimensions = Dimensions.get("screen");
  const styles = getStyles(screenDimensions);

  return (
    <View style={styles.container}>
      {question?.id ? (
        <>
          <View style={styles.buttonContainer}>
            <FlatList
              data={question.options}
              renderItem={({ item, index }) => (
                <OptionButton
                  buttonText={item}
                  key={`${item}-${index}`}
                  onPress={() => onSelectOption(item)}
                  type="primary"
                  fullWidth
                  ans={question.correctAnswer}
                />
              )}
              scrollEnabled={false}
            />
          </View>
        </>
      ) : (
        <Text style={{ color: "red" }}>
          Quiz complete! Your score is {score}/{questions.length}
        </Text>
      )}
    </View>
  );
};

const getStyles = (screenDimensions) => {
  const isTablet = screenDimensions.width > 1000;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageback: {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      justifyContent: "center",
      alignSelf: "center",
      alignContent: "center",
    },
    gameContainer: {
      width: "90%",
      justifyContent: "space-evenly",
      alignSelf: "center",
      alignContent: "center",
      borderTopRightRadius: 50,
      borderBottomLeftRadius: 50,
      paddingVertical: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: isTablet ? 50 : 24,
      color: colors.blue,
      alignSelf: "center",
      alignContent: "center",
      alignItems: "center",
    },
    subtitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: colors.blue,
      marginBottom: 5,
    },
    endTitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: colors.blue,
    },
    scoreAnnouncement: {
      fontWeight: "bold",
      fontSize: 30,
      color: colors.blue,
    },
    awardImg: {
      width: 200,
      height: 250,
      resizeMode: "contain",
    },
    bold: {
      fontWeight: "bold",
    },
    resultContainer: {
      flex: 1,
      marginTop: 20,
      alignItems: "center",
      width: "100%",
    },
    listContainer: {
      flex: 1,
      marginTop: 10,
      color: colors.white,
      width: "100%",
      padding: 20,
      marginBottom: -40,
    },
    reviewAnswer: {
      marginVertical: 5,
    },
    question: {
      fontSize: 20,
      color: colors.white,
      textAlign: "center",
      paddingHorizontal: 20,
      fontFamily: fonts.SenBold,
    },
    buttonContainer: {
      padding: Width(24),
      width: "100%",
    },

    iStyle: {
      height: 150,
      width: 150,
      borderRadius: 100,
      overflow: "hidden",
      alignSelf: "center",
      marginBottom: 40,
    },
  });
  return styles;
};
