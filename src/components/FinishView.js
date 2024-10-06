import React, { useEffect, useState, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Animated,
  Modal,
  TextInput,
  TouchableOpacity,
  Easing,
  ImageBackground,
} from "react-native";
import FastImage from "react-native-fast-image";
import { useDispatch, useSelector } from "react-redux";
import colors from "../utils/colors";
import Container from "./common/Container";
import imageConstants from "../utils/imageConstants";
import { userAction } from "../redux/action/userAction";
import { useNavigation } from "@react-navigation/native";
import navigationConstants from "../utils/navigationConstants";
import { questions } from "../helper/dummyData";

const FinishView = ({ finalScore }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const uData = useSelector((state) => state?.user?.userData);
  const screenDimensions = Dimensions.get("screen");
  const styles = getStyles(screenDimensions);
  const quiz = useSelector((state) => state?.quiz?.quizData?.quizData);
  const quizItems = quiz ? quiz : questions;
  const percentageScore = ((finalScore / quizItems.length) * 100).toFixed(2);

  console.log({ finalScore, quizItems });
  // Animation state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const scaleAnim = useRef(new Animated.Value(1)).current; // Button scale animation

  useEffect(() => {
    if (percentageScore >= 70) {
      const imageTimer = setTimeout(() => {
        setIsImageVisible(true);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }, 1000);
      const modalTimer = setTimeout(() => {
        setIsModalVisible(true);
        // uData
        //   ? navigation.navigate(navigationConstants.PASSPORT)
        //   : setIsModalVisible(true);
      }, 3000);
      return () => {
        clearTimeout(imageTimer);
        clearTimeout(modalTimer);
      };
    }
  }, [percentageScore]);

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.endTitle}>Quiz Completed!</Text>
            <Text style={styles.scoreAnnouncement}>
              You scored {finalScore} out of {quizItems.length}
            </Text>
            <Text style={styles.scorePercentage}>
              Score: {percentageScore}%
            </Text>
          </View>

          {percentageScore >= 70 ? (
            <>
              <View style={styles.animatedImageContainer}>
                {isImageVisible && (
                  <Animated.View style={{ opacity: fadeAnim }}>
                    <FastImage
                      style={styles.rewardImage}
                      source={imageConstants.rewords}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </Animated.View>
                )}
              </View>

              <Modal
                transparent={true}
                animationType="slide"
                visible={isModalVisible}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>
                      Enter Your Astronaut Details
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Name"
                      value={userName}
                      onChangeText={setUserName}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Age"
                      value={userAge}
                      onChangeText={setUserAge}
                      keyboardType="numeric"
                    />
                    <TouchableOpacity
                      style={styles.submitButton}
                      onPress={() => {
                        if (userName && userAge) {
                          const obj = {
                            userName: userName,
                            age: userAge,
                          };
                          dispatch(userAction(obj));
                          setIsModalVisible(false);

                          navigation.navigate(navigationConstants.PASSPORT);
                        }
                      }}
                    >
                      <Text style={styles.submitButtonText}>Launch</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </>
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 3,
              }}
            >
              <Text style={styles.sorryMessage}>
                Mission Failed. Try Again!
              </Text>
            </View>
          )}
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
    // Apply a gradient background for more interaction
    gradientBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
      zIndex: -1,
    },
    endTitle: {
      fontWeight: "bold",
      fontSize: isTablet ? 40 : 24,
      color: colors.white,
      textShadowColor: "rgba(0, 0, 0, 0.3)",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,
    },
    scoreAnnouncement: {
      fontWeight: "bold",
      fontSize: isTablet ? 60 : 32,
      color: colors.white,
      marginTop: 10,
      textShadowColor: "rgba(0, 0, 0, 0.3)",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,
    },
    resultContainer: {
      flex: 1,
      marginTop: 20,
      alignItems: "center",
      width: "100%",
    },
    scorePercentage: {
      fontWeight: "bold",
      fontSize: isTablet ? 40 : 24,
      marginTop: 10,
      color: colors.blue,
      textShadowColor: "rgba(0, 0, 0, 0.3)",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,
    },
    sorryMessage: {
      fontWeight: "bold",
      fontSize: isTablet ? 40 : 24,
      color: "orange",
      textShadowColor: "rgba(0, 0, 0, 0.2)",
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 3,
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: 15,
      padding: 25,
      width: "80%",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      color: colors.darkBlue,
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: 12,
      borderWidth: 1,
      borderColor: colors.lightGray,
      borderRadius: 10,
      marginBottom: 20,
      fontSize: 16,
      backgroundColor: colors.lightBackground,
    },
    submitButton: {
      backgroundColor: colors.primaryBlue,
      // paddingVertical: 12,
      // paddingHorizontal: 30,
      // borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    submitButtonText: {
      color: "blue",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
    animatedImageContainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 3,
    },
    rewardImage: {
      width: "80%",
      aspectRatio: 1 / 1,
      borderRadius: 15,
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 8,
    },
  });

  return styles;
};
