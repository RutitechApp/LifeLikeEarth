import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Container from "../../components/common/Container";
import iconConstants from "../../utils/iconConstants";
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";
import { Height, Width } from "../../utils/responsive";
import imageConstants from "../../utils/imageConstants";
import contents from "../../utils/contents";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import Textinput from "../../components/common/Textinput";
import LinearButton from "../../components/common/LinearButton";
import { useDispatch } from "react-redux";
import { newPasswordUser } from "../../redux/action/authAction";
import { ToastConfig } from "../../components/common/ToastConfig";
import navigationConstants from "../../utils/navigationConstants";

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const showToast = (message, type) => {
    Toast.show({
      type: "tomatoToast",
      props: { uuid: message, type: type },
    });
  };

  const onSavePress = () => {
    if (password?.length === 0) {
      showToast("Please Enter Required Password", "error");
    } else if (password?.length < 6) {
      showToast("Password must contain at least 6 characters", "error");
    } else if (confirmPassword?.length === 0) {
      showToast("Please Enter Required Confirm Password", "error");
    } else if (confirmPassword !== password) {
      showToast("Confirm Password and Password must be the same", "error");
    } else {
      const obj = {
        email: "",
        password: password,
        confirmPassword: confirmPassword,
        onSuccess: (res) => {
          showToast("New Password Created Successfully!!", "success");
          setTimeout(() => {
            navigation.navigate(navigationConstants.SIGNIN);
          }, 1500);
        },
        onFail: (err) => {
          showToast(err?.response?.data?.message || "An error occurred");
        },
      };
      dispatch(newPasswordUser(obj));
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
      <Text style={style.textStyle}>{contents.CREATENEWPASSWORD}</Text>
      <Textinput
        textInputViewstyle={{ marginTop: Height(20) }}
        keyboardType={"number-pad"}
        value={"EMAIL"}
        editable={false}
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
        title={contents.SAVE}
        btnStyle={{ marginTop: Height(50) }}
        onPress={() => onSavePress()}
      />
    </Container>
  );
};

export default NewPasswordScreen;

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
});
