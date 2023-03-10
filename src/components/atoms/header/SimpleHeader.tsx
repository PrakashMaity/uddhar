import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { styleConst } from "../../../theme/root.style";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../../interface/Navigation.interface";

interface headerInterface {
  back?: boolean;
  threeDot?: boolean;
  title?: string;
  theme?: string;
}
const SimpleHeader = ({
  back,
  threeDot,
  title,
  theme = "dark",
}: headerInterface) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <View
      style={{
        height: responsiveHeight(64),
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: responsiveWidth(20),
      }}
    >
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          height: "100%",
          width: responsiveWidth(35),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {back && (
          <AntDesign
            name="arrowleft"
            color={theme === "dark" ? "black" : "white"}
            size={responsiveWidth(26)}
          />
        )}
      </Pressable>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {title && (
          <Text
            numberOfLines={1}
            style={{
              fontSize: responsiveHeight(22),
              fontFamily: styleConst.FONT_FAMILY.INTER_BOLD,
              color: theme === "dark" ? "black" : "white",
            }}
          >
            {title}
          </Text>
        )}
      </View>
      <Pressable
        style={{
          height: "100%",
          width: responsiveWidth(35),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {threeDot && (
          <Entypo
            name="dots-three-horizontal"
            color={theme === "dark" ? "black" : "white"}
            size={responsiveWidth(25)}
          />
        )}
      </Pressable>
    </View>
  );
};

export default SimpleHeader;
