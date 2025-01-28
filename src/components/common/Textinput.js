import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import colors from "../../utils/colors";
import { Height, Width } from "../../utils/responsive";
import fonts from "../../utils/fonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const Textinput = ({
  placeholder,
  keyboardType,
  onChangeText,
  value,
  editable,
  textInput,
  secureTextEntry,
  textInputViewstyle,
  autoCapitalize,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={[style.textInputContainer, textInputViewstyle]}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={style.gradientBorder}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={style.textInputViewstyle}>
          <TextInput
            placeholder={placeholder}
            style={[style.textInput, textInput]}
            placeholderTextColor={colors.placeholder}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            value={value}
            editable={editable}
            secureTextEntry={secureTextEntry ? !showPassword : false}
            autoCapitalize={autoCapitalize}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Ionicons
                  name="eye-off-outline"
                  color={colors.white}
                  size={Height(20)}
                />
              ) : (
                <Ionicons
                  name="eye-outline"
                  color={colors.white}
                  size={Height(20)}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Textinput;

const style = StyleSheet.create({
  textInputContainer: {
    marginHorizontal: Width(24),
    backgroundColor: colors.black,
  },
  gradientBorder: {
    padding: 2,
    borderTopLeftRadius: Width(20),
    borderBottomRightRadius: Width(20),
  },
  textInput: {
    fontSize: Height(16),
    fontFamily: fonts.ArchivoMedium,
    color: colors.white,
    marginRight: Width(15),
    width: "90%",
    backgroundColor: colors.black,
  },
  textInputViewstyle: {
    borderTopLeftRadius: Width(20),
    borderBottomRightRadius: Width(20),
    paddingHorizontal: Width(15),
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Platform.OS === "ios" ? Height(16) : 0,
    justifyContent: "space-between",
    backgroundColor: colors.black,
  },
});
