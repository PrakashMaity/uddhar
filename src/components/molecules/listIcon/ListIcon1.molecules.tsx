import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SquareBox from "../../atoms/squareBox/SquareBox.atom";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";
import { styleConst } from "../../../theme/root.style";

interface ListIconInterface {
  content: {
    title: string;
    icon: string;
    route: string;
    theme: string;
    price?:string;
  };
  bottomBorder?: boolean;
}
const ListIcon1 = ({ content,bottomBorder = true }: ListIconInterface) => {
  return (
    <View
      style={[
        styles.listBox,
        {
          borderBottomWidth: bottomBorder ? responsiveWidth(0.2) : 0,
          paddingBottom: bottomBorder ? responsiveHeight(15) : 0,
        },
      ]}
    >
      <SquareBox icon={content.icon} theme={content.theme} />
      <Text style={[styles.listTitle,{fontFamily:content.price? styleConst.FONT_FAMILY.INTER_SEMIBOLD:styleConst.FONT_FAMILY.PRIMARY}]}>{content.title}</Text>
      {
        content.price && <Text style={[styles.listPrice]}>${content.price}</Text>
      }
    </View>
  );
};

export default ListIcon1;

const styles = StyleSheet.create({
  listBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(10),
    borderBottomColor: "#EEE5FF",
  },
  listTitle: {
    fontSize: styleConst.FONT_SIZE.REGULAR_1,
    // fontFamily:styleConst.FONT_FAMILY.INTER_SEMIBOLD,
    color: styleConst.COLOR.DARK.DARK_25,
    flex:1
  },
  listPrice:{
    fontSize: styleConst.FONT_SIZE.TITLE_3,
    fontFamily:styleConst.FONT_FAMILY.INTER_SEMIBOLD,
    color:styleConst.COLOR.DARK.DARK_75
  }
});
