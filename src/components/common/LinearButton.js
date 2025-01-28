import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Height, Width } from "../../utils/responsive";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

const LinearButton = ({
  btnStyle,
  linearBtnStyle,
  linearBtnTextStyle,
  title,
  onPress,
  isLoading,
}) => {
  return (
    <TouchableOpacity style={[style.btnStyle, btnStyle]} onPress={onPress}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={[style.linearBtnStyle, linearBtnStyle]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {isLoading ? (
          <ActivityIndicator
            size={"small"}
            color={colors.whiteColor}
            style={{ paddingVertical: Height(3) }}
          />
        ) : (
          <Text style={[style.linearBtnTextStyle, linearBtnTextStyle]}>
            {title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearButton;

const style = StyleSheet.create({
  btnStyle: {
    marginHorizontal: Width(90),
  },
  linearBtnStyle: {
    borderTopLeftRadius: Width(20),
    paddingVertical: Height(15),
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: Width(20),
  },
  linearBtnTextStyle: {
    color: "white",
    fontSize: Height(20),
    fontFamily: fonts.ArchivoMedium,
    textTransform: "capitalize",
  },
});
