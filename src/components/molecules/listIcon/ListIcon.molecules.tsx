import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SquareBox from "../../atoms/squareBox/SquareBox.atom";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";
import { styleConst } from "../../../theme/root.style";

const ListIcon = () => {
  return (
    <View style={styles.listBox}>
      <SquareBox />
      <Text style={styles.listTitle}>Account</Text>
    </View>
  );
};

export default ListIcon;

const styles = StyleSheet.create({
  listBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(10),
  },
  listTitle: {
    fontSize: styleConst.FONT_SIZE.REGULAR_1,
    color: styleConst.COLOR.DARK.DARK_25,
  },
});
