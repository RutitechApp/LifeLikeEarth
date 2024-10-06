import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import imageConstants from "../utils/imageConstants";
import { useSelector } from "react-redux";
import colors from "../utils/colors";
import Container from "./common/Container";

const FinishView = ({ finalScore }) => {
  const screenDimensions = Dimensions.get("screen");
  const styles = getStyles(screenDimensions);
  const quiz = useSelector((state) => state?.quiz?.quizData?.quizData);
  const percentageScore = ((finalScore / quiz.length) * 100).toFixed(2);

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.endTitle}>All questions answered!</Text>
            <Text style={styles.scoreAnnouncement}>
              You scored {finalScore} out of {quiz.length}
            </Text>

            <Text style={styles.scorePercentage}>
              That's {percentageScore}%!
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 3,
            }}
          >
            <FastImage
              style={{
                width: "80%",
                aspectRatio: 1 / 1,
                borderRadius: 10,
                overflow: "hidden",
              }}
              source={imageConstants.rewords}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default FinishView;

const getStyles = (screenDimensions) => {
  const isTablet = screenDimensions.width > 1000;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
    },
    subtitle: {
      fontWeight: "bold",
      fontSize: isTablet ? 30 : 20,
      marginBottom: 5,
    },
    endTitle: {
      fontWeight: "bold",
      fontSize: isTablet ? 40 : 20,
      color: colors.white,
    },
    scoreAnnouncement: {
      fontWeight: "bold",
      fontSize: isTablet ? 60 : 30,
      color: "red",
    },
    awardImg: {
      width: 150,
      height: 200,
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
      width: "100%",
      padding: 20,
      marginBottom: -40,
    },
    reviewAnswer: {
      fontSize: isTablet ? 20 : 14,
      marginVertical: 5,
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    scorePercentage: {
      fontWeight: "bold",
      fontSize: isTablet ? 40 : 24,
      marginTop: 10,
      color: "blue",
    },
  });
  return styles;
};
