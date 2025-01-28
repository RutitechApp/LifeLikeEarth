import { apiConst, GET } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/axiosRequest";
import { GET_EXOPLANETS_DATA_SUCCESS } from "./type";

export const fetchExoplanet = (payload) => {
  return (dispatch) =>
    makeAPIRequest(
      GET,
      apiConst.getExoplanet(payload?.page, payload?.limit, payload?.planetType),
      null,
      null,
      null
    )
      .then((res) => {
        dispatch({
          type: GET_EXOPLANETS_DATA_SUCCESS,
          payload: res?.data?.data,
        });
        payload?.onSuccess(res?.data?.data);
      })
      .catch((err) => {
        payload?.onFail(err);
      });
};
