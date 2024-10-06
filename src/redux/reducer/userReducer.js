import { USER_DATA_SUCCESS } from "../action/type";

const initialState = {
  userData: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
