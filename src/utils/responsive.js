import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const figmaHeight = 932;
const figmaWidth = 430;

export const Height = (componentHeight) => {
  return (windowHeight * componentHeight) / figmaHeight;
};

export const Width = (componentWidth) => {
  return (windowWidth * componentWidth) / figmaWidth;
};
