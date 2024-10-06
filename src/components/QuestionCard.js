import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { questions } from "../helper/dummyData";
import colors from "../utils/colors";
import { OptionButton } from "./OptionButton";
import Container from "./common/Container";
import imageConstants from "../utils/imageConstants";
import FastImage from "react-native-fast-image";
import iconConstants from "../utils/iconConstants";
import { useNavigation } from "@react-navigation/native";
import fonts from "../utils/fonts";

export const QuestionCard = ({ question, onSelectOption, score, data }) => {
  const screenDimensions = Dimensions.get("screen");
  const styles = getStyles(screenDimensions);
  const navigation = useNavigation();
  const [correctOption, setCorrectOption] = useState(false);
  const onTapOnOption = (item) => {
    setCorrectOption(item == question.correctAnswer);
    onSelectOption(item);
  };
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FastImage source={iconConstants.back} style={styles.backImageStyle} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.gameContainer}>
          {question?.id ? (
            <>
              <FastImage
                source={
                  data?.planetImage === undefined
                    ? imageConstants.logo
                    : {
                        uri: data?.planetImage,
                      }
                }
                style={styles.iStyle}
                resizeMode="contain"
              />
              <Text style={styles.question}>{question?.question}</Text>
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
            <Text>
              Quiz complete! Your score is {score}/{questions.length}
            </Text>
          )}
        </View>
      </View>
    </Container>
  );
};

const getStyles = (screenDimensions) => {
  const isTablet = screenDimensions.width > 1000;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
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
      backgroundColor: "rgba(255,255,255,0.1)",
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
      fontFamily: fonts.SpaceGroteskBold,
    },
    buttonContainer: {
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    backImageStyle: {
      height: 38,
      width: 38,
      marginHorizontal: 16,
    },
    iStyle: {
      height: 150,
      width: 150,
      borderRadius: 100,
      overflow: "hidden",
      alignSelf: "center",
      // marginTop: 20,
      marginBottom: 40,
    },
  });
  return styles;
};
