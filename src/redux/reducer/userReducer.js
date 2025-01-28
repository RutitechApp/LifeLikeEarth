import {
  USER_DATA_SUCCESS,
  USER_INFO_GET_FAILED,
  USER_INFO_GET_SUCCESS,
} from "../action/type";

const initialState = {
  userData: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO_GET_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        error: null,
      };
    case USER_INFO_GET_FAILED:
      return {
        ...state,
        userData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
