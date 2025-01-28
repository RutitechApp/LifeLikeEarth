import React, { useRef, useState } from "react";
import {
  Animated,
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
import fonts from "../../utils/fonts";
import { Height, Width } from "../../utils/responsive";
import Container from "../../components/common/Container";
import navigationConstants from "../../utils/navigationConstants";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route?.params?.data;
  const [showDetails, setShowDetails] = useState(false);

  const slideAnim = useRef(new Animated.Value(0)).current;
  const slideUp = () => {
    Animated.timing(slideAnim, {
      toValue: -15,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const toggleDetails = () => {
    if (showDetails) {
      slideDown();
    } else {
      slideUp();
    }
    setShowDetails(!showDetails);
  };

  return (
    <Container>
      <View style={style.rViewStyle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FastImage source={iconConstants.back} style={style.backImageStyle} />
        </TouchableOpacity>
        {showDetails && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(navigationConstants.QUIZ, { data: data })
            }
          >
            <FastImage
              source={iconConstants.quiz}
              style={style.backImageStyle}
            />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: Height(20) }}
      >
        {!showDetails && (
          <Text style={style.pTextStyle}>{data?.planetName}</Text>
        )}
        <FastImage
          source={{ uri: data?.planetImage }}
          style={[
            {
              height: !showDetails ? Height(331) : Height(216),
              width: !showDetails ? Width(328) : Width(214),
            },
            style.iStyle,
          ]}
          resizeMode="contain"
        />
        {!showDetails && (
          <TouchableOpacity onPress={toggleDetails}>
            <FastImage source={iconConstants.up} style={style.iconStyle} />
          </TouchableOpacity>
        )}
        {showDetails && (
          <View>
            <Text style={style.planetTypeStyle}>{data?.planetType}</Text>
            <Text style={style.planetNameStyle}>{data?.planetName}</Text>
          </View>
        )}

        <Animated.View style={[{ transform: [{ translateY: slideAnim }] }]}>
          {showDetails && (
            <View style={style.cardViewStyle}>
              <View style={style.rowViewStyle}>
                <Text style={style.tStyle}>PLANET TYPE</Text>
                <Text style={style.pTStyle}>{data?.planetType}</Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: Height(20) }]}>
                <Text style={style.tStyle}>DISCOVERED IN</Text>
                <Text style={style.pTStyle}>{data?.discoveryYear}</Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: Height(20) }]}>
                <Text style={style.tStyle}>ORBITAL PERIOD</Text>
                <Text style={style.pTStyle}>{data?.orbitalPeriodDays}</Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: Height(20) }]}>
                <Text style={style.tStyle}>DISCOVERY METHOD</Text>
                <Text style={style.pTStyle}>{data?.discoveryMethod}</Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: Height(20) }]}>
                <Text style={style.tStyle}>DISCOVERY FACILITY</Text>
                <Text style={style.pTStyle}>{data?.discoveryFacility}</Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: Height(20) }]}>
                <Text style={style.tStyle}>PLANET MASS</Text>
                <Text style={style.pTStyle}>
                  {data?.planetMassOrMassSinIEarthMass}
                </Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: Height(20) }]}>
                <Text style={style.tStyle}>TEMPERATURE</Text>
                <Text style={style.pTStyle}>
                  {data?.stellarEffectiveTemperatureK}
                </Text>
              </View>
              <View style={[style.rowViewStyle, { marginTop: Height(20) }]}>
                <Text style={style.tStyle}>TEMPERATURE</Text>
                <Text style={style.pTStyle}>
                  {data?.stellarEffectiveTemperatureK}
                </Text>
              </View>
              <Text style={style.dTextStyle}>DESCRIPTION</Text>
              <Text style={style.dSubTextStyle}>{data?.description}</Text>
            </View>
          )}
        </Animated.View>
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
    height: Height(45),
    width: Height(45),
    marginTop: Height(20),
  },
  rowViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tStyle: {
    fontSize: Height(16),
    fontFamily: fonts.SenBold,
    color: "#1E59CC",
  },
  pTStyle: {
    fontSize: Height(20),
    fontFamily: fonts.SenBold,
    color: colors.white,
    textAlign: "justify",
    width: "40%",
  },
  dTextStyle: {
    fontSize: Height(24),
    color: "#1E59CC",
    fontFamily: fonts.SenBold,
    textAlign: "center",
    marginTop: Height(44),
  },
  dSubTextStyle: {
    fontSize: Height(14),
    fontFamily: fonts.SenMedium,
    color: colors.white,
    textAlign: "justify",
    lineHeight: Height(22),
    marginTop: Height(20),
  },
  cardViewStyle: {
    width: Width(382),
    alignSelf: "center",
    paddingHorizontal: Width(27),
    paddingVertical: Height(47),
    backgroundColor: "#121212",
    borderRadius: Width(30),
    borderWidth: 0.5,
    borderColor: colors.white,
    marginTop: Height(20),
  },
  planetNameStyle: {
    fontSize: Height(32),
    color: colors.white,
    fontFamily: fonts.SenBold,
    textAlign: "center",
  },
  planetTypeStyle: {
    fontSize: Height(20),
    color: colors.white,
    fontFamily: fonts.SenSemiBold,
    textAlign: "center",
    opacity: 0.4,
    marginTop: Height(14),
  },
  iconStyle: {
    height: Height(40),
    width: Height(40),
    alignSelf: "center",
    marginTop: Height(122),
  },
  pTextStyle: {
    fontSize: Height(48),
    color: colors.white,
    fontFamily: fonts.SenSemiBold,
    textAlign: "center",
    marginTop: Height(30),
  },
  iStyle: {
    alignSelf: "center",
    marginTop: Height(40),
  },
  rViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: Width(16),
  },
});
