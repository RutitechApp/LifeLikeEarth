import { apiConst, GET } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/axiosRequest";
import { GET_EXOPLANETS_DATA_SUCCESS, GET_QUIZ_DATA_FAILED } from "./type";

export const fetchExoplanet = () => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.getExoplanet, null, null, null)
      .then((res) => {
        dispatch({
          type: GET_EXOPLANETS_DATA_SUCCESS,
          payload: res?.data?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_QUIZ_DATA_FAILED,
          payload: err,
        });
      });
};
