import React, { useState, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import imageConstants from "../../utils/imageConstants";
import colors from "../../utils/colors";
import SubHeader from "../../components/common/SubHeader";
import { useNavigation } from "@react-navigation/native";

const SpaceScreen = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [zoomedIn, setZoomedIn] = useState(false);
  const navigation = useNavigation();

  const toggleZoom = () => {
    Animated.timing(scaleAnim, {
      toValue: zoomedIn ? 1 : 2,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setZoomedIn(!zoomedIn);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
      <SubHeader onPress={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        >
          <TouchableWithoutFeedback onPress={toggleZoom}>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <ImageBackground
                source={imageConstants.space}
                style={styles.imageBackground}
                resizeMode="stretch"
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpaceScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  imageBackground: {
    width: 2000,
    height: 1500,
  },
});
