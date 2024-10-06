import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

const Button = ({ title, buttonStyle, buttonTextStyle, onPress }) => {
  return (
    <TouchableOpacity style={[style.buttonStyle, buttonStyle]}>
      <Text style={[style.btnTextStyle, { buttonTextStyle }]} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const style = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 0.3,
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginLeft: 226,
    marginRight: 20,
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: 22,
    fontFamily: fonts.SpaceGroteskBold,
  },
});
