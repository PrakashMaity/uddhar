import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import React, { Fragment, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LargeButton from "../../../../components/atoms/button/LargeButton";
import { responsiveHeight, responsiveWidth } from "../../../../utils/ResponsiveUI";
import { styleConst } from "../../../../style/root.style";
const { width } = Dimensions.get("window");
import { useTranslation } from "react-i18next";
import { sliderData } from "./pageData/SliderData";

export default function IntroScreen() {
  const navigation:any = useNavigation();
  const { t, i18n } = useTranslation();
  const [activePage, setActivePage] = useState(0);
  const handleScrollEnd = (
    event: any
  ) => {
    let contentOffsetX = event.nativeEvent.contentOffset.x + 10;
    let curretPg = Math.round(contentOffsetX / width);
    setActivePage(curretPg);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          onMomentumScrollEnd={handleScrollEnd}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {sliderData.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  height: "100%",
                  width: Dimensions.get("window").width,
                  paddingVertical: responsiveHeight(32),
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: responsiveWidth(312),
                    width: responsiveWidth(312),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      height: "90%",
                      width: "90%",
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: responsiveHeight(35),
                    fontFamily: styleConst.FONT_FAMILY.INTER_BOLD,
                    marginTop: responsiveHeight(41),
                    textAlign: "center",
                    color: "#212325",
                  }}
                >
                  {t(item.title_key)}
                </Text>
                <Text
                  style={{
                    marginTop: responsiveHeight(14),
                    fontSize: responsiveHeight(23),
                    fontFamily: styleConst.FONT_FAMILY.PRIMARY,
                    paddingHorizontal: responsiveWidth(20),
                    textAlign: "center",
                  }}
                >
                  {item.description}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          marginBottom: responsiveHeight(30),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[0, 1, 2].map((item, index) => {
          return (
            <View key={index}>
              {activePage == index ? (
                <View
                  key={index}
                  style={{
                    height: responsiveHeight(13),
                    width: responsiveHeight(13),
                    borderRadius: responsiveHeight(16) / 2,
                    backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100,
                    marginHorizontal: responsiveWidth(5),
                  }}
                />
              ) : (
                <View
                  key={index}
                  style={{
                    height: responsiveHeight(8),
                    width: responsiveHeight(8),
                    borderRadius: responsiveHeight(8) / 2,
                    backgroundColor: "#EEE5FF",
                    marginHorizontal: responsiveWidth(5),
                  }}
                />
              )}
            </View>
          );
        })}
      </View>
      <View style={{ marginHorizontal: responsiveWidth(20) }}>
        <LargeButton
          title="Sign Up"
          onPress={() => {
            navigation.navigate("Signup");
          }}
        />
        <LargeButton
          onPress={() => {
            navigation.navigate("Login");
          }}
          buttonTextColor={styleConst.COLOR.VIOLET.VIOLET_100}
          title="Login"
          style={{
            marginVertical: responsiveHeight(16),
            backgroundColor: styleConst.COLOR.VIOLET.VIOLET_20,
          }}
        />
      </View>
    </View>
  );
}
