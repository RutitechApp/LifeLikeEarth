import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Container from "../../components/common/Container";
import iconConstants from "../../utils/iconConstants";
import { Height, Width } from "../../utils/responsive";
import { useNavigation } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import imageConstants from "../../utils/imageConstants";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import contents from "../../utils/contents";
import Textinput from "../../components/common/Textinput";
import LinearButton from "../../components/common/LinearButton";
import navigationConstants from "../../utils/navigationConstants";
import { strongRegex } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { forgotUserPassword } from "../../redux/action/authAction";
import Toast from "react-native-toast-message";
import { ToastConfig } from "../../components/common/ToastConfig";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const showToast = (message, type) => {
    Toast.show({
      type: "tomatoToast",
      props: { uuid: message, type: type },
    });
  };

  const onContinuePress = () => {
    if (email?.length === 0) {
      showToast("Please Enter Valid email address", "error");
    } else if (!strongRegex.test(email)) {
      showToast("Please Enter Required phone number", "error");
    } else {
      setLoading(true);
      const obj = {
        data: { email: email },
        onSuccess: (res) => {
          setLoading(false);
          showToast(
            "Otp Sent Successfully on your registered  email !!",
            "success"
          );
          setTimeout(() => {
            navigation.navigate(navigationConstants.VERIFYOTP, {
              email: email,
            });
          }, 1500);
        },
        onFail: (err) => {
          setLoading(false);
          showToast(err?.response?.data?.message || "An error occurred");
        },
      };
      dispatch(forgotUserPassword(obj));
    }
  };

  return (
    <Container>
      <Toast config={ToastConfig} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FastImage source={iconConstants.back} style={style.backImageStyle} />
      </TouchableOpacity>
      <FastImage
        source={imageConstants.logo}
        style={style.logoStyle}
        resizeMode="contain"
      />
      <Text style={style.textStyle}>{contents.FORGOTPASSWORD}</Text>
      <Textinput
        placeholder={contents.EMAIL}
        textInputViewstyle={{ marginTop: Height(40) }}
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
      <LinearButton
        title={contents.CONTINUE}
        btnStyle={{ marginTop: Height(135) }}
        onPress={() => onContinuePress()}
        isLoading={loading}
      />
    </Container>
  );
};

export default ForgotPasswordScreen;

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
  textStyle: {
    fontSize: Height(30),
    color: colors.white,
    fontFamily: fonts.ArchivoBold,
    textAlign: "center",
    marginTop: Height(20),
    textTransform: "uppercase",
  },
});
