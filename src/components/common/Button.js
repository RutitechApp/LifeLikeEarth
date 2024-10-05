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
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    borderWidth: 1,
    borderColor: "#0B0B0B",
    marginHorizontal: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fonts.CrimsonTextSemiBold,
  },
});
