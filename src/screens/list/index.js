import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  View,
} from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import SubHeader from "../../components/common/SubHeader";
import CardView from "../../components/common/CardView";
import PlanetCardView from "../../components/common/PlanetCardView";
import navigationConstants from "../../utils/navigationConstants";
import { Height, Width } from "../../utils/responsive";
import { useDispatch } from "react-redux";
import { fetchExoplanet } from "../../redux/action/exoplanetAction";
import Container from "../../components/common/Container";

const ListScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [exoplanetData, setExoplanetData] = useState([]);
  const referenceType = route?.params?.data;

  useFocusEffect(
    useCallback(() => {
      fetchData(1, 10, true);
    }, [])
  );

  const fetchData = (page, limit, reset = false) => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const obj = {
        page: page,
        limit: limit,
        planetType: referenceType,
        onSuccess: (data) => {
          console.log("data", data);
          setExoplanetData((prevData) => [...prevData, ...data]);
          setHasMoreData(data.length === limit);
        },
        onFail: () => {
          setHasMoreData(false);
        },
      };

      dispatch(fetchExoplanet(obj));
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (hasMoreData) {
      fetchData(currentPage + 1, 10);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const renderItem = ({ item }) => (
    <CardView
      data={item}
      onPress={() =>
        navigation.navigate(navigationConstants.DETAILS, { data: item })
      }
    />
  );

  const renderPlanetItem = ({ item }) => (
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
      <View style={style.viewStyle}>
        <FlatList
          data={
            route?.params?.header === "Planets"
              ? route?.params?.data
              : exoplanetData
          }
          renderItem={
            route?.params?.header === "Planets" ? renderPlanetItem : renderItem
          }
          numColumns={2}
          columnWrapperStyle={style.columnWrapperStyle}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            hasMoreData && exoplanetData.length !== 0 ? (
              <View style={style.loaderViewStyle}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            ) : null
          }
          contentContainerStyle={
            route?.params?.header !== "Planets" && exoplanetData.length === 0
              ? style.viewStyle
              : undefined
          }
          ListEmptyComponent={() => (
            <View style={style.noDataFoundViewStyle}>
              <Image
                source={require("../../assets/images/NoDataFound.png")}
                style={style.noDataFoundImageStyle}
                resizeMode="contain"
              />
            </View>
          )}
        />
      </View>
    </Container>
  );
};

export default ListScreen;

const style = StyleSheet.create({
  noDataFoundViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataFoundImageStyle: {
    height: Height(200),
    width: Width(250),
  },
  columnWrapperStyle: {
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: Width(20),
  },
  loaderViewStyle: {
    marginVertical: Height(10),
  },
  viewStyle: {
    flex: 1,
  },
});
