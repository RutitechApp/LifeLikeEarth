import React from "react";
import { Text, View } from "react-native";
import Container from "../../components/common/Container";
import { useNavigation, useRoute } from "@react-navigation/native";
import SubHeader from "../../components/common/SubHeader";

const PalnetScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <Container>
      <SubHeader
        title={route?.params?.data?.plantName}
        onPress={() => navigation.goBack()}
      />
    </Container>
  );
};

export default PalnetScreen;
