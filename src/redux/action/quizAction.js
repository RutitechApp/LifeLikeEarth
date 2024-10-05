import { apiConst, GET } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/axiosRequest";
import { GET_QUIZ_DATA_SUCCESS } from "./type";

export const fetchQuiz = (payload) => {
  const id = payload?.id;
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.getExoplanetQuiz(id), null, null, null)
      .then((res) => {
        dispatch({
          type: GET_QUIZ_DATA_SUCCESS,
          payload: res?.data?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_EXOPLANETS_DATA_FAILED,
          payload: err,
        });
      });
};
