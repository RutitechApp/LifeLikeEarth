import { View, Text } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import { Height, Width } from "../../utils/responsive";
import fonts from "../../utils/fonts";

const ErrorText = ({ error }) => {
  return (
    <View>
      <Text
        style={{
          color: colors.red,
          fontSize: Height(10),
          marginHorizontal: Width(30),
          fontFamily: fonts.ArchivoRegular,
        }}
      >
        {error}
      </Text>
    </View>
  );
};

export default ErrorText;
