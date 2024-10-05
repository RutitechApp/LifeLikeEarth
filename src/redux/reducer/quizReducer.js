import { GET_QUIZ_DATA_FAILED, GET_QUIZ_DATA_SUCCESS } from "../action/type";

const initialState = {
  quizData: [],
  error: null,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZ_DATA_SUCCESS:
      return {
        ...state,
        quizData: action.payload,
        error: null,
      };
    case GET_QUIZ_DATA_FAILED:
      return {
        ...state,
        quizData: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default quizReducer;
