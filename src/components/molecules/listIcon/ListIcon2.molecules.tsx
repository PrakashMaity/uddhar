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
const ListIcon2 = ({ content,bottomBorder = true }: ListIconInterface) => {
  return (
    <View
      style={[
        styles.listBox,
      ]}
    >
      <SquareBox icon={content.icon} theme={content.theme} />
      <View style={styles.middleSection}>
      <Text style={[styles.listTitle,{fontFamily:styleConst.FONT_FAMILY.INTER_SEMIBOLD}]}>{content.title}</Text>
      <Text style={[styles.listTitle,{fontFamily:styleConst.FONT_FAMILY.PRIMARY}]}>Buy some grocery</Text>
      </View>
      <View style={styles.rightSection}>
      <Text style={[styles.listTitleRight,{color:styleConst.COLOR.RED.RED_100}]}>- $120</Text>
      <Text style={[styles.listTime,{fontFamily:styleConst.FONT_FAMILY.PRIMARY}]}>10:00 AM</Text>
      </View>
    </View>
  );
};

export default ListIcon2;

const styles = StyleSheet.create({
  listBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(10),
    padding:responsiveWidth(12),
    backgroundColor:"#FCFCFC",
    borderRadius:responsiveWidth(15)
  },
  listTitle: {
    fontSize: styleConst.FONT_SIZE.REGULAR_1,
    color: styleConst.COLOR.DARK.DARK_25,
    
  },
  middleSection:{
    flex:1,
    gap:responsiveHeight(10)
  },
  rightSection:{
   
  },
  listTitleRight:{
    fontSize: styleConst.FONT_SIZE.REGULAR_1,
    color: styleConst.COLOR.DARK.DARK_25,
    fontFamily:styleConst.FONT_FAMILY.INTER_BOLD,
  },
  listTime:{
    fontSize: styleConst.FONT_SIZE.SMALL,

  }
});
