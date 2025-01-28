import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const makeAPIRequest = async (method, url, data, headers, params) =>
  new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem("token");
    const options = {
      method,
      url,
      data,
      params,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
    };

    axios(options)
      .then(async (response) => {
        if (response?.status === 200 || response?.status === 201) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(async (error) => {
        reject(error);
      });
    return null;
  });

export default makeAPIRequest;
