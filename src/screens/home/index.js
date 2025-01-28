import React, { useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  ImageBackground,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";
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
import { Height, Width } from "../../utils/responsive";
import { userInfoGet } from "../../redux/action/authAction";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(userInfoGet());
    dispatch(fetchExoplanet());
  };

  const renderItem = ({ item, index }) => (
    <TypeCardView
      data={item}
      index={index}
      onPress={() =>
        navigation.navigate(navigationConstants.LIST, {
          data: item?.typeName,
          header: item?.name,
        })
      }
    />
  );

  return (
    <Container>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
      >
        <View style={{ marginHorizontal: Width(16) }}>
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
          container={{ marginTop: Height(32), marginHorizontal: Width(20) }}
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
              <Text style={[style.subTextStyle, { fontSize: Height(20) }]}>
                Yellow Dwarf
              </Text>
              <Text style={[style.subTextStyle, { width: Width(200) }]}>
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
    height: Height(200),
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: Height(20),
  },
  typeFlatListViewStyle: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageBGStyle: {
    height: Height(160),
    width: Width(300),
    alignSelf: "center",
    marginTop: Height(30),
    paddingTop: Height(10),
  },
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    bottom: Height(5),
  },
  sunImageStyle: {
    height: Height(150),
    width: Height(150),
    marginLeft: Width(-60),
  },
  textStyle: {
    fontSize: Height(25),
    fontFamily: fonts.SenSemiBold,
    color: colors.white,
  },
  subTextStyle: {
    fontSize: Height(12),
    fontFamily: fonts.SenMedium,
    color: colors.white,
    opacity: 0.5,
  },
  ttStyle: {
    fontSize: Height(16),
    color: colors.white,
    fontFamily: fonts.SenBold,
    marginTop: Height(60),
    textAlign: "center",
    opacity: 0.8,
    textDecorationLine: "underline",
  },
});
