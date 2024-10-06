import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Container from "../../components/common/Container";
import SubHeader from "../../components/common/SubHeader";
import CardView from "../../components/common/CardView";
import PlanetCardView from "../../components/common/PlanetCardView";
import navigationConstants from "../../utils/navigationConstants";

const ListScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <CardView
      data={item}
      onPress={() =>
        navigation.navigate(navigationConstants.DETAILS, { data: item })
      }
    />
  );

  const renderPalnetItem = ({ item }) => (
    <PlanetCardView
      data={item}
      onPress={() =>
        navigation.navigate(navigationConstants.PLANET, { data: item })
      }
    />
  );

  return (
    <Container>
      <SubHeader
        title={route?.params?.header}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={route?.params?.data}
        renderItem={
          route?.params?.header === "Planets" ? renderPalnetItem : renderItem
        }
        numColumns={2}
        columnWrapperStyle={{
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
      />
    </Container>
  );
};

export default ListScreen;
const style = StyleSheet.create({});
