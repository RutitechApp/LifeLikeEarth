import React, { useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import Container from "../../components/common/Container";
import FastImage from "react-native-fast-image";
import imageConstants from "../../utils/imageConstants";
import { Height, Width } from "../../utils/responsive";
import Textinput from "../../components/common/Textinput";
import contents from "../../utils/contents";
import iconConstants from "../../utils/iconConstants";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LinearButton from "../../components/common/LinearButton";
import navigationConstants from "../../utils/navigationConstants";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/action/authAction";
import { strongRegex } from "../../utils/constant";
import { ToastConfig } from "../../components/common/ToastConfig";
import Toast from "react-native-toast-message";

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const showToast = (message, type) => {
    Toast.show({
      type: "tomatoToast",
      props: { uuid: message, type: type },
    });
  };

  const onSignUpPress = () => {
    if (fullName?.length === 0) {
      showToast("Please Enter Required Full Name", "error");
    } else if (email?.length === 0) {
      showToast("Please Enter Required email address", "error");
    } else if (!strongRegex.test(email)) {
      showToast("Please Enter Valid email address", "error");
    } else if (phoneNo?.length === 0) {
      showToast("Please Enter Required phone number", "error");
    } else if (password?.length === 0) {
      showToast("Please Enter Required Password", "error");
    } else if (password?.length < 6) {
      showToast("Password must contain 6 characters", "error");
    } else if (confirmPassword?.length === 0) {
      showToast("Please Enter Required Confirm Password", "error");
    } else if (confirmPassword !== password) {
      showToast("Confirm Password and Password must be same", "error");
    } else {
      setLoading(true);
      const obj = {
        data: {
          fullName: fullName,
          email: email,
          mobileNumber: phoneNo,
          password: password,
          confirmPassword: confirmPassword,
        },
        onSuccess: (res) => {
          setLoading(false);
          showToast("Sign-up successful!", "success");
          setTimeout(() => {
            navigation.navigate(navigationConstants.SIGNIN);
          }, 1500);
        },
        onFail: (err) => {
          setLoading(false);
          showToast(err?.response?.data?.message || "An error occurred");
        },
      };
      dispatch(signUpUser(obj));
    }
  };

  return (
    <Container>
      <Toast config={ToastConfig} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FastImage source={iconConstants.back} style={style.backImageStyle} />
      </TouchableOpacity>
      <KeyboardAwareScrollView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        alwaysBounceVertical={false}
      >
        <FastImage
          source={imageConstants.logo}
          style={style.logoStyle}
          resizeMode="contain"
        />
        <Text style={style.textStyle}>{contents.SIGNUP}</Text>
        <Textinput
          placeholder={contents.FULLNAME}
          textInputViewstyle={{ marginTop: Height(40) }}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <Textinput
          placeholder={contents.EMAIL}
          textInputViewstyle={{ marginTop: Height(20) }}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={"none"}
        />
        <Textinput
          placeholder={contents.PHONENUMBER}
          textInputViewstyle={{ marginTop: Height(20) }}
          keyboardType={"number-pad"}
          value={phoneNo}
          onChangeText={(text) => setPhoneNo(text)}
        />
        <Textinput
          placeholder={contents.PASSWORD}
          textInputViewstyle={{ marginTop: Height(20) }}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Textinput
          placeholder={contents.CONFIRMPASSWORD}
          textInputViewstyle={{ marginTop: Height(20) }}
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <LinearButton
          title={contents.SIGNUP}
          btnStyle={{ marginTop: Height(50) }}
          onPress={() => onSignUpPress()}
          isLoading={loading}
        />
        <Text style={style.alreadyHaveAnAccount}>
          {contents.ALREADYHAVEANACCOUNT}{" "}
          <Text
            style={style.signinTextStyle}
            onPress={() => navigation.navigate(navigationConstants.SIGNIN)}
          >
            {contents.SIGNIN}
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default SignUpScreen;

const style = StyleSheet.create({
  logoStyle: {
    height: Height(100),
    width: Height(100),
    alignSelf: "center",
    marginTop: Height(50),
  },
  backImageStyle: {
    height: Height(45),
    width: Height(45),
    marginHorizontal: Width(24),
    marginTop: Height(20),
  },
  alreadyHaveAnAccount: {
    color: colors.white,
    marginHorizontal: Width(24),
    textAlign: "center",
    marginTop: Height(10),
    fontFamily: fonts.ArchivoLight,
  },
  signinTextStyle: {
    color: colors.primary,
    textDecorationLine: "underline",
    fontFamily: fonts.ArchivoBold,
    textTransform: "uppercase",
  },
  textStyle: {
    fontSize: Height(30),
    color: colors.white,
    fontFamily: fonts.ArchivoBold,
    textAlign: "center",
    marginTop: Height(20),
  },
});
