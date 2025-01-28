import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiConst, GET, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/axiosRequest";
import {
  USER_CREATE_NEW_PASSWORD_FAILED,
  USER_CREATE_NEW_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAILED,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_INFO_GET_FAILED,
  USER_INFO_GET_SUCCESS,
  USER_OTP_VERIFY_FAILED,
  USER_OTP_VERIFY_SUCCESS,
  USER_RESEND_OTP_VERIFY_FAILED,
  USER_RESEND_OTP_VERIFY_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_SUCCESS,
} from "./type";

export const signInUser = (payload) => {
  return (dispatch) =>
    makeAPIRequest(POST, apiConst.signIn, payload?.data, null, null)
      .then((res) => {
        AsyncStorage.setItem("token", res?.data?.token);
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: res?.data?.data,
        });
        payload.onSuccess(res?.data?.data);
      })
      .catch((err) => {
        dispatch({
          type: USER_SIGNIN_FAILED,
          payload: err,
        });
        payload.onFail(err);
      });
};

export const signUpUser = (payload) => {
  return (dispatch) =>
    makeAPIRequest(POST, apiConst.signUp, payload?.data, null, null)
      .then((res) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: res?.data?.data,
        });
        payload.onSuccess(res?.data?.data);
      })
      .catch((err) => {
        dispatch({
          type: USER_SIGNUP_FAILED,
          payload: err,
        });
        payload.onFail(err);
      });
};

export const forgotUserPassword = (payload) => {
  return (dispatch) =>
    makeAPIRequest(POST, apiConst.forgotPassword, payload?.data, null, null)
      .then((res) => {
        dispatch({
          type: USER_FORGOT_PASSWORD_SUCCESS,
          payload: res?.data?.data,
        });
        payload.onSuccess(res?.data?.data);
      })
      .catch((err) => {
        dispatch({
          type: USER_FORGOT_PASSWORD_FAILED,
          payload: err,
        });
        payload.onFail(err);
      });
};

export const otpUser = (payload) => {
  return (dispatch) =>
    makeAPIRequest(POST, apiConst.verifyOtp, payload?.data, null, null)
      .then((res) => {
        dispatch({
          type: USER_OTP_VERIFY_SUCCESS,
          payload: res?.data?.data,
        });
        payload.onSuccess(res?.data?.data);
      })
      .catch((err) => {
        dispatch({
          type: USER_OTP_VERIFY_FAILED,
          payload: err,
        });
        payload.onFail(err);
      });
};

export const otpResendUser = (payload) => {
  return (dispatch) =>
    makeAPIRequest(POST, apiConst.resendOtp, payload?.data, null, null)
      .then((res) => {
        dispatch({
          type: USER_RESEND_OTP_VERIFY_SUCCESS,
          payload: res?.data?.data,
        });
        payload.onSuccess(res?.data?.data);
      })
      .catch((err) => {
        dispatch({
          type: USER_RESEND_OTP_VERIFY_FAILED,
          payload: err,
        });
        payload.onFail(err);
      });
};

export const newPasswordUser = (payload) => {
  return (dispatch) =>
    makeAPIRequest(POST, apiConst.newPassword, payload?.data, null, null)
      .then((res) => {
        dispatch({
          type: USER_CREATE_NEW_PASSWORD_SUCCESS,
          payload: res?.data?.data,
        });
        payload.onSuccess(res?.data?.data);
      })
      .catch((err) => {
        dispatch({
          type: USER_CREATE_NEW_PASSWORD_FAILED,
          payload: err,
        });
        payload.onFail(err);
      });
};

export const userInfoGet = () => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.userInfo, null, null, null)
      .then((res) => {
        dispatch({
          type: USER_INFO_GET_SUCCESS,
          payload: res?.data?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: USER_INFO_GET_FAILED,
          payload: err,
        });
      });
};
