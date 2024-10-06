import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { thunk } from "redux-thunk";
import exoplanetReducer from "../reducer/exoplanetReducer";
import quizReducer from "../reducer/quizReducer";
import userReducer from "../reducer/userReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  exoplanet: exoplanetReducer,
  quiz: quizReducer,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
