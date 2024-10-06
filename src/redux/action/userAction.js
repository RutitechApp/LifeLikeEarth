import { USER_DATA_SUCCESS } from "./type";

export const userAction = (payload) => {
  console.log('payload',payload)
  return (dispatch) =>
    dispatch({
      type: USER_DATA_SUCCESS,
      payload: payload,
    });
};
