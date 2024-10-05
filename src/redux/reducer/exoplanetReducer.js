import {
  GET_EXOPLANETS_DATA_FAILED,
  GET_EXOPLANETS_DATA_SUCCESS,
} from "../action/type";

const initialState = {
  exoplanetData: [],
  error: null,
};

const exoplanetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXOPLANETS_DATA_SUCCESS:
      return {
        ...state,
        exoplanetData: action.payload,
        error: null,
      };
    case GET_EXOPLANETS_DATA_FAILED:
      return {
        ...state,
        exoplanetData: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default exoplanetReducer;
