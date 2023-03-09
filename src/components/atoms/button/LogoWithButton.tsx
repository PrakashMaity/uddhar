import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { styleConst } from "../../../theme/root.style";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
interface ButtonInterface {
  title?: string;
  plusIcon?: boolean;
  style?: object;
  onPress?: () => void;
  buttonColor?: string;
  buttonTextColor?: string;
  icon?: any;
}

export default function LogoWithButton({
  title,
  plusIcon,
  style,
  onPress,
  buttonColor,
  buttonTextColor,
  icon,
}: ButtonInterface) {
  //    console.log(Icon)

  const styles = StyleSheet.create({
    customButton: {
      backgroundColor:
        buttonColor == undefined
          ? styleConst.COLOR.VIOLET.VIOLET_100
          : buttonColor,
      width: "100%",
      height: responsiveHeight(60),
      borderRadius: responsiveHeight(14),
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
      fontSize: responsiveHeight(19),
      color:
        buttonTextColor == undefined
          ? styleConst.COLOR.LIGHT.LIGHT_80
          : buttonTextColor,
    },
    iconBox: {
      height: responsiveHeight(28),
      width: responsiveHeight(28),
      marginRight: responsiveHeight(6),
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <TouchableOpacity
      disabled={onPress ? false : true}
      onPress={onPress}
      style={[styles.customButton, style]}
    >
      {icon && (
        <View style={styles.iconBox}>
          <Image
            source={icon}
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
          />
        </View>
      )}
      {title && (
        <Text numberOfLines={1} style={styles.buttonText}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
