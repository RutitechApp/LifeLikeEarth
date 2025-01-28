import React, { useEffect } from "react";
import AppNavigation from "./src/navigation/AppNavigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/redux/store/store";
import SplashScreen from "react-native-splash-screen";
import { LogBox, StatusBar } from "react-native";
import colors from "./src/utils/colors";

LogBox.ignoreAllLogs();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={colors.black} barStyle={"light-content"} />
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
