import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import colors from "../../utils/colors";
import { Height, Width } from "../../utils/responsive";
import fonts from "../../utils/fonts";

const GradientOtpInput = ({
  numberOfDigits = 5,
  gradientColors = [colors.primary, colors.secondary],
  onOtpChange = () => {},
}) => {
  const [otp, setOtp] = useState(Array(numberOfDigits).fill(""));
  const inputRefs = useRef([]);

  const handleTextChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onOtpChange(newOtp.join(""));

    if (text && index < numberOfDigits - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: numberOfDigits }).map((_, index) => (
        <LinearGradient
          key={index}
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBorder}
        >
          <View style={styles.inputContainer}>
            <TextInput
              ref={(el) => (inputRefs.current[index] = el)}
              value={otp[index]}
              onChangeText={(text) => handleTextChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              maxLength={1}
              keyboardType="numeric"
              style={styles.input}
              textAlign="center"
            />
          </View>
        </LinearGradient>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Height(20),
    paddingHorizontal: Width(24),
  },
  gradientBorder: {
    width: Height(55),
    height: Height(55),
    borderRadius: Width(8),
    padding: Width(2),
  },
  inputContainer: {
    flex: 1,
    backgroundColor: colors.black,
    borderRadius: Width(6),
  },
  input: {
    flex: 1,
    fontSize: Height(20),
    color: colors.white,
    textAlign: "center",
    fontFamily: fonts.ArchivoMedium,
  },
});

export default GradientOtpInput;
