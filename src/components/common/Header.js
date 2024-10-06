import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import iconConstants from "../../utils/iconConstants";
import { useNavigation } from "@react-navigation/native";
import navigationConstants from "../../utils/navigationConstants";
import imageConstants from "../../utils/imageConstants";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(navigationConstants.PASSPORT)}
      >
        <Image
          source={imageConstants.logo}
          style={styles.ic_notification}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(navigationConstants.QUIZ)}
      >
        <Image source={iconConstants.quiz} style={styles.ic_notification} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 23,
  },
  ic_notification: {
    height: 38,
    width: 38,
  },
});
