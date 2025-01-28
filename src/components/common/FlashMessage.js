import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Animated, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import colors from "../../utils/colors";
import { Height, Width } from "../../utils/responsive";

const { width } = Dimensions.get("screen");

const FlashMessage = ({ message, duration = 1500, onDismiss }) => {
  const [visible, setVisible] = useState(true);
  const translateY = React.useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      Animated.timing(translateY, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
        if (onDismiss) onDismiss();
      });
    }, 1500);

    return () => clearTimeout(timeout);
  }, [duration, onDismiss, translateY]);

  if (!message) return null;

  return (
    <Animated.View
      style={[styles.flashMessage, { transform: [{ translateY }] }]}
    >
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.gradientBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.messageText}>{message}</Text>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flashMessage: {
    position: "absolute",
    top: 0,
    width: width,
    zIndex: 9999,
  },
  gradientBackground: {
    padding: Width(15),
    height: Height(100),
    justifyContent: "flex-end",
  },
  messageText: {
    color: colors.white,
    fontSize: Height(12),
  },
});

export default FlashMessage;
