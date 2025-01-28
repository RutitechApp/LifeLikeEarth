import { View, Text, StyleSheet } from "react-native";
import { Height, Width } from "../../utils/responsive";

export const ToastConfig = {
  tomatoToast: ({ props }) => (
    <View style={style.viewStyle}>
      <View
        style={{
          width: Width(5),
          backgroundColor: props?.type === "error" ? "red" : "green",
          height: Height(60),
          borderTopLeftRadius: Width(5),
          borderBottomLeftRadius: Width(5),
        }}
      />
      <Text
        style={{
          color: "white",
          fontSize: Height(15),
          marginHorizontal: Width(25),
        }}
      >
        {props.uuid}
      </Text>
    </View>
  ),
};

const style = StyleSheet.create({
  viewStyle: {
    height: Height(60),
    width: "90%",
    backgroundColor: "rgba(37, 36, 36, 0.5)",
    borderRadius: Width(5),
    flexDirection: "row",
    alignItems: "center",
  },
});
