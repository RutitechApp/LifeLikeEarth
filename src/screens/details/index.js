import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../utils/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import iconConstants from "../../utils/iconConstants";
import Container from "../../components/common/Container";
import fonts from "../../utils/fonts";
import navigationConstants from "../../utils/navigationConstants";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route?.params?.data;
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 16,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FastImage source={iconConstants.back} style={style.backImageStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(navigationConstants.QUIZ, { data: data })
          }
        >
          <FastImage source={iconConstants.quiz} style={style.backImageStyle} />
        </TouchableOpacity>
      </View>
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        {!showDetails && (
          <Text style={style.pTextStyle}>{data?.planetName}</Text>
        )}
        <FastImage
          source={{ uri: data?.planetImage }}
          style={[
            {
              height: !showDetails ? 331 : 216,
              width: !showDetails ? 328 : 214,
            },
            style.iStyle,
          ]}
        />
        {!showDetails && (
          <TouchableOpacity onPress={() => setShowDetails(!showDetails)}>
            <FastImage source={iconConstants.up} style={style.iconStyle} />
          </TouchableOpacity>
        )}
        {showDetails && (
          <View>
            <Text style={style.planetTypeStyle}>{data?.planetType}</Text>
            <Text style={style.planetNameStyle}>{data?.planetName}</Text>
            <View style={style.cardViewStyle} resizeMode="contain">
              <View style={style.rowViewStyle}>
                <Text style={style.tStyle}>PLANET TYPE</Text>
                <Text style={style.pTStyle}>{data?.planetType}</Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: 20 }]}>
                <Text style={style.tStyle}>DISCOVERED IN</Text>
                <Text style={style.pTStyle}>{data?.discoveryYear}</Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: 20 }]}>
                <Text style={style.tStyle}>ORBITAL PERIOD</Text>
                <Text style={style.pTStyle}>{data?.orbitalPeriodDays}</Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: 20 }]}>
                <Text style={style.tStyle}>DISCOVEREY METHOD</Text>
                <Text style={style.pTStyle}>{data?.discoveryMethod}</Text>
              </View>
              <View
                style={[
                  style.rowViewStyle,
                  {
                    marginTop: 20,
                  },
                ]}
              >
                <Text style={style.tStyle}>DISCOVEREY FACILITY</Text>
                <Text style={style.pTStyle}>{data?.discoveryFacility}</Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: 20 }]}>
                <Text style={style.tStyle}>PLANET MASS</Text>
                <Text style={style.pTStyle}>
                  {data?.planetMassOrMassSinIEarthMass}
                </Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: 20 }]}>
                <Text style={style.tStyle}>TEMPERATURE</Text>
                <Text style={style.pTStyle}>
                  {data?.stellarEffectiveTemperatureK}
                </Text>
              </View>
              <Text style={style.dTextStyle}>DESCRIPTION</Text>
              <Text style={style.dSubTextStyle}>{data?.description}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </Container>
  );
};

export default DetailsScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  backImageStyle: {
    height: 43,
    width: 43,
  },
  imageStyle: {
    height: 331,
    width: 328,
    alignSelf: "center",
    marginTop: 40,
  },
  rowViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tStyle: {
    fontSize: 16,
    fontFamily: fonts.SpaceGroteskBold,
    color: "#1E59CC",
  },
  pTStyle: {
    fontSize: 20,
    fontFamily: fonts.SpaceGroteskBold,
    color: colors.white,
    textAlign: "justify",
    width: "40%",
  },
  dTextStyle: {
    fontSize: 24,
    color: "#1E59CC",
    fontFamily: fonts.SpaceGroteskBold,
    textAlign: "center",
    marginTop: 44,
  },
  dSubTextStyle: {
    fontSize: 14,
    fontFamily: fonts.SpaceGroteskMedium,
    color: colors.white,
    textAlign: "justify",
    lineHeight: 22,
    marginTop: 20,
  },
  cardViewStyle: {
    width: 382,
    alignSelf: "center",
    paddingHorizontal: 27,
    paddingVertical: 47,
    backgroundColor: "#121212",
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: colors.white,
    marginTop: 20,
  },
  planetNameStyle: {
    fontSize: 32,
    color: colors.white,
    fontFamily: fonts.SpaceGroteskBold,
    textAlign: "center",
  },
  planetTypeStyle: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.SpaceGroteskSemiBold,
    textAlign: "center",
    opacity: 0.4,
    marginTop: 14,
  },
  iconStyle: {
    height: 40,
    width: 40,
    alignSelf: "center",
    marginTop: 122,
  },
  pTextStyle: {
    fontSize: 48,
    color: colors.white,
    fontFamily: fonts.SpaceGroteskSemiBold,
    textAlign: "center",
    marginTop: 30,
  },
  iStyle: {
    alignSelf: "center",
    marginTop: 40,
  },
});
