import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/common/Container";
import FastImage from "react-native-fast-image";
import iconConstants from "../../utils/iconConstants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Height, Width } from "../../utils/responsive";
import imageConstants from "../../utils/imageConstants";
import colors from "../../utils/colors";
import contents from "../../utils/contents";
import fonts from "../../utils/fonts";
import GradientOtpInput from "../../components/common/GradientOtpInput";
import LinearButton from "../../components/common/LinearButton";
import navigationConstants from "../../utils/navigationConstants";
import { useDispatch } from "react-redux";
import { otpResendUser, otpUser } from "../../redux/action/authAction";
import FlashMessage from "../../components/common/FlashMessage";
import { ToastConfig } from "../../components/common/ToastConfig";
import Toast from "react-native-toast-message";

const VerifyOtpScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const [otp, setOtp] = useState();
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);

  const showToast = (message, type) => {
    Toast.show({
      type: "tomatoToast",
      props: { uuid: message, type: type },
    });
  };

  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );
  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  const resetTimer = () => {
    if (!timer) {
      setTimer(60);
    }
    if (timer === 0) {
      resendVerifyOtp();
    }
  };

  const resendVerifyOtp = () => {
    const obj = {
      data: {
        email: route?.params?.email,
      },
      onSuccess: (res) => {},
      onFail: (err) => {},
    };

    dispatch(otpResendUser(obj));
  };

  const onContinuePress = () => {
    if (!otp) {
      showToast("Please Enter OTP", "error");
    } else {
      setLoading(true);
      const obj = {
        data: { email: route?.params?.email, otp: otp },
        onSuccess: (res) => {
          setLoading(false);
          showToast("OTP Verifed successfully", "success");
          setTimeout(() => {
            navigation.navigate(navigationConstants.NEWPASSWORD, {
              email: route?.params?.email,
            });
          }, 1500);
        },
        onFail: (err) => {
          setLoading(false);
          showToast(err?.response?.data?.message || "An error occurred");
        },
      };
      dispatch(otpUser(obj));
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
      <Text style={style.textStyle}>{contents.VERIFYOTP}</Text>
      <GradientOtpInput
        numberOfDigits={5}
        onOtpChange={(otp) => {
          setOtp(otp);
        }}
      />
      <View style={{ marginTop: Height(20) }}>
        {timer === 0 ? (
          <Text onPress={resetTimer} style={style.resendCodeTextStyle}>
            {contents.RESENDCODE}
          </Text>
        ) : (
          <Text style={style.sendCodeAgainStyle}>
            {contents.SENDCODEAGAIN}:{" "}
            <Text disabled={timer !== 0} style={{ color: colors.primary }}>
              00:{timer}s
            </Text>
          </Text>
        )}
      </View>
      <LinearButton
        title={contents.CONTINUE}
        btnStyle={{ marginTop: Height(50) }}
        onPress={() => onContinuePress()}
        isLoading={loading}
      />
    </Container>
  );
};

export default VerifyOtpScreen;
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
  },
  resendCodeTextStyle: {
    textAlign: "center",
    fontSize: Height(15),
    color: colors.primary,
    fontFamily: fonts.ArchivoRegular,
    marginTop: Height(13),
  },
  sendCodeAgainStyle: {
    textAlign: "center",
    fontSize: Height(15),
    color: colors.white,
    fontFamily: fonts.ArchivoRegular,
  },
});
