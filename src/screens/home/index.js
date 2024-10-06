import React, { useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  View,
  ImageBackground,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchExoplanet } from "../../redux/action/exoplanetAction";
import Header from "../../components/common/Header";
import Container from "../../components/common/Container";
import imageConstants from "../../utils/imageConstants";
import { PlannetData, typeData } from "../../helper/dummyData";
import TypeCardView from "../../components/common/TypeCardView";
import TitleHeader from "../../components/common/TitleHeader";
import FastImage from "react-native-fast-image";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
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

  const renderItem = ({ item, index }) => (
    <TypeCardView
      data={item}
      index={index}
      onPress={() =>
        navigation.navigate(navigationConstants.LIST, {
          data: data?.filter((fItem) => fItem?.planetType === item?.name),
          header: item?.name,
        })
      }
    />
  );

  return (
    <Container>
      <Header />
      <ScrollView>
        <View style={{ marginHorizontal: 16 }}>
          <ImageBackground
            source={imageConstants.bannerImage}
            style={style.banner}
            resizeMode="contain"
          >
            <Text
              style={style.ttStyle}
              onPress={() => navigation.navigate(navigationConstants.SPACE)}
            >
              Open Your Space
            </Text>
          </ImageBackground>
        </View>

        <FlatList
          data={typeData}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={style.typeFlatListViewStyle}
          scrollEnabled={false}
        />
        <TitleHeader
          title={"You may also like"}
          container={{ marginTop: 32, marginHorizontal: 20 }}
          onPress={() =>
            navigation.navigate(navigationConstants.LIST, {
              data: PlannetData,
              header: "Planets",
            })
          }
        />

        <ImageBackground
          source={imageConstants.planetCard}
          style={style.imageBGStyle}
          resizeMode="contain"
        >
          <View style={style.viewStyle}>
            <FastImage
              source={imageConstants.sun}
              style={style.sunImageStyle}
            />
            <View>
              <Text style={style.textStyle}>Sun</Text>
              <Text style={style.subTextStyle}>Yellow Dwarf</Text>
              <Text style={style.subTextStyle}>
                A dwarf planet travels around, or orbits, {"\n"}the Sun just
                like other planets. {"\n"}But it is much smaller.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
const style = StyleSheet.create({
  banner: {
    height: 200,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
  },
  typeFlatListViewStyle: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageBGStyle: {
    height: 160,
    width: 300,
    alignSelf: "center",
    marginTop: 30,
    paddingTop: 10,
  },
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  sunImageStyle: {
    height: 130,
    width: 130,
    marginLeft: -40,
  },
  textStyle: {
    fontSize: 24,
    fontFamily: fonts.SpaceGroteskSemiBold,
    color: colors.white,
  },
  subTextStyle: {
    fontSize: 12,
    fontFamily: fonts.SpaceGroteskRegular,
    color: colors.white,
  },
  subTextStyle: {
    fontSize: 10,
    fontFamily: fonts.SpaceGroteskMedium,
    color: colors.white,
    lineHeight: 15,
    opacity: 0.5,
  },
  ttStyle: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.SpaceGroteskBold,
    marginTop: 55,
    textAlign: "center",
    opacity: 0.8,
    textDecorationLine: "underline",
  },
});
