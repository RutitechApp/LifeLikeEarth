import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CardView from "../../components/common/CardView";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchExoplanet } from "../../redux/action/exoplanetAction";
import navigationConstants from "../../utils/navigationConstants";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.exoplanet?.exoplanetData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(fetchExoplanet());
  };
  const renderItem = ({ item }) => {
    return (
      <CardView
        data={item}
        onPress={() =>
          navigation.navigate(navigationConstants.DETAILS, { data: item })
        }
      />
    );
  };
  return (
    <Container>
      <Header />
      <Image
        source={imageConstants.bannerImage}
        style={style.banner}
        resizeMode="contain"
      />
      <CategoryView />
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        ItemSeparatorComponent={() => <View style={{ marginLeft: 13 }} />}
      />
    </Container>
  );
};

export default HomeScreen;
const style = StyleSheet.create({
  banner: {
    height: 200,
    width: "100%",
  },
});
