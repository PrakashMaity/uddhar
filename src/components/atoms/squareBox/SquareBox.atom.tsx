import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";
import { styleConst } from "../../../theme/root.style";
import { images } from "../../../constant/images.contant";
import Ionicons from "react-native-vector-icons/Ionicons";

interface SquareBoxInterface {
  icon: string;
  theme?: string;
}
const SquareBox = ({ icon, theme = "normal" }: SquareBoxInterface) => {
  return (
    <View
      style={[
        styles.box,
        {
          backgroundColor:
            theme == "normal"
              ? styleConst.COLOR.VIOLET.VIOLET_20
              : styleConst.COLOR.RED.RED_20,
        },
      ]}
    >
      <Ionicons
        name={icon}
        size={responsiveWidth(30)}
        color={
          theme == "normal"
            ? styleConst.COLOR.VIOLET.VIOLET_100
            : styleConst.COLOR.RED.RED_100
        }
      />
    </View>
  );
};

export default SquareBox;

const styles = StyleSheet.create({
  box: {
    width: responsiveWidth(52),
    height: responsiveWidth(52),
    borderRadius: responsiveWidth(16),
    alignItems: "center",
    justifyContent: "center",
  },
});
