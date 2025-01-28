import React, { useState } from "react";
import { Text, StyleSheet, Dimensions, Pressable } from "react-native";
import colors from "../utils/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Height, Width } from "../utils/responsive";
import fonts from "../utils/fonts";

export const OptionButton = ({
  fullWidth,
  buttonText,
  disabled,
  type,
  onPress,
  ans,
}) => {
  const screenDimensions = Dimensions.get("screen");
  const styles = getStyles(screenDimensions);
  const [selectedOption, setSelectedOption] = useState("");
  const onPressAnd = () => {
    setSelectedOption(buttonText);
    onPress(buttonText);
  };
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: "rgba(255, 255, 255, 0.13)",
          borderColor: colors.primary,
          alignSelf: fullWidth ? "stretch" : "center",
          borderWidth: Width(3),
        },
      ]}
      onPress={onPressAnd}
      disabled={disabled}
    >
      <Text
        style={[
          styles.buttonText,
          { color: disabled ? colors[type] : "white" },
        ]}
      >
        {buttonText}
      </Text>
      <MaterialCommunityIcons
        name={
          selectedOption
            ? buttonText == ans
              ? "checkbox-marked-circle"
              : "close-circle"
            : "checkbox-blank-circle-outline"
        }
        color={
          selectedOption
            ? buttonText == ans
              ? colors.primary
              : colors.red
            : colors.white
        }
        size={Height(25)}
        style={{ marginLeft: Width(10) }}
      />
    </Pressable>
  );
};

const getStyles = (screenDimensions) => {
  const styles = StyleSheet.create({
    button: {
      justifyContent: "center",
      alignItems: "center",
      padding: Width(15),
      borderRadius: Width(15),
      margin: Width(5),
      flexDirection: "row",
      justifyContent: "space-between",
      width: "95%",
    },
    buttonText: {
      fontSize: Height(14),
      width: "90%",
      fontFamily: fonts.SenMedium,
    },
  });
  return styles;
};
