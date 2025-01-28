import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import Container from "../../components/common/Container";
import FastImage from "react-native-fast-image";
import imageConstants from "../../utils/imageConstants";
import { Height, Width } from "../../utils/responsive";
import contents from "../../utils/contents";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import Textinput from "../../components/common/Textinput";
import LinearButton from "../../components/common/LinearButton";
import { useNavigation } from "@react-navigation/native";
import navigationConstants from "../../utils/navigationConstants";
import { strongRegex } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/action/authAction";
import { ToastConfig } from "../../components/common/ToastConfig";

const SignInScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const showToast = (message, type) => {
    Toast.show({
      type: "tomatoToast",
      props: { uuid: message, type: type },
    });
  };

  const onSignInPress = () => {
    if (!email) {
      showToast("Please Enter Required email address", "error");
    } else if (!strongRegex.test(email)) {
      showToast("Please Enter Valid email address", "error");
    } else if (!password) {
      showToast("Please Enter Required Password", "error");
    } else if (password?.length < 6) {
      showToast("Password must contain 6 characters", "error");
    } else {
      setLoading(true);
      const obj = {
        data: {
          email: email,
          password: password,
        },
        onSuccess: (res) => {
          setLoading(false);
          showToast("Sign-in successful!", "success");
          setTimeout(() => {
            navigation.navigate(navigationConstants.HOME);
          }, 1500);
        },
        onFail: (err) => {
          setLoading(false);
          showToast(err?.response?.data?.message || "An error occurred");
        },
      };
      dispatch(signInUser(obj));
    }
  };

  return (
    <Container>
      <Toast config={ToastConfig} />
      <FastImage
        source={imageConstants.logo}
        style={style.logoStyle}
        resizeMode="contain"
      />
      <Text style={style.textStyle}>{contents.SIGNIN}</Text>
      <Textinput
        placeholder={contents.EMAIL}
        textInputViewstyle={{ marginTop: Height(40) }}
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
      <Textinput
        placeholder={contents.PASSWORD}
        textInputViewstyle={{ marginTop: Height(20) }}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text
        style={style.forgotPasswordTextStyle}
        onPress={() => navigation.navigate(navigationConstants.FORGOTPASSWORD)}
      >
        {contents.FORGOTPASSWORD}?
      </Text>
      <LinearButton
        title={contents.SIGNIN}
        btnStyle={{ marginTop: Height(50) }}
        onPress={() => onSignInPress()}
        isLoading={loading}
      />
      <Text style={style.dontHaveAnAccount}>
        {contents.DONTHAVEANACCOUNT}{" "}
        <Text
          style={style.signupTextStyle}
          onPress={() => navigation.navigate(navigationConstants.SIGNUP)}
        >
          {contents.SIGNUP}
        </Text>
      </Text>
    </Container>
  );
};

export default SignInScreen;
const style = StyleSheet.create({
  logoStyle: {
    height: Height(100),
    width: Height(100),
    alignSelf: "center",
    marginTop: Height(100),
  },
  textStyle: {
    fontSize: Height(30),
    color: colors.white,
    fontFamily: fonts.ArchivoBold,
    textAlign: "center",
    marginTop: Height(20),
  },
  forgotPasswordTextStyle: {
    color: colors.white,
    marginHorizontal: Width(24),
    alignSelf: "flex-end",
    marginTop: Height(10),
    fontFamily: fonts.ArchivoRegular,
    opacity: 0.7,
  },
  dontHaveAnAccount: {
    color: colors.white,
    marginHorizontal: Width(24),
    textAlign: "center",
    marginTop: Height(10),
    fontFamily: fonts.ArchivoLight,
  },
  signupTextStyle: {
    color: colors.primary,
    textDecorationLine: "underline",
    fontFamily: fonts.ArchivoBold,
    textTransform: "uppercase",
  },
});
