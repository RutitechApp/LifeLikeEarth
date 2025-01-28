import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import { Height, Width } from "../../utils/responsive";

const Button = ({ title, buttonStyle, buttonTextStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={[style.buttonStyle, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[style.btnTextStyle, { buttonTextStyle }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const style = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 0.3,
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: Width(15),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Height(15),
    marginLeft: Width(270),
    marginRight: Width(20),
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: Height(22),
    fontFamily: fonts.SpaceGroteskBold,
    textAlign: "center",
  },
});
