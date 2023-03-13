import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { styleConst } from "../../../theme/root.style";
import { responsiveWidth } from "../../../helper/ResponsiveUI";

interface ChipIconInterface {
  isActive?: boolean;
  title: string;
  size?: string;
}
const ChipIcon = ({
  isActive = true,
  title,
  size = "medium",
}: ChipIconInterface) => {
  return (
    <View
      style={[
        isActive ? styles.chipSectionActive : styles.chipSectionInactive,
        {
          width: size === "medium" ? responsiveWidth(115) : responsiveWidth(71),
        },
      ]}
    >
      <Text
        style={[
          isActive ? styles.chipTitleActive : styles.chipTitleInActive,
          {
            fontSize:
              size === "medium"
                ? styleConst.FONT_SIZE.TITLE_3
                : styleConst.FONT_SIZE.REGULAR_3,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default ChipIcon;

const styles = StyleSheet.create({
  chipSectionActive: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: styleConst.COLOR.VIOLET.VIOLET_40,
    padding: responsiveWidth(12),
    borderRadius: responsiveWidth(24),
  },
  chipSectionInactive: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // backgroundColor: styleConst.COLOR.VIOLET.VIOLET_40,
    padding: responsiveWidth(12),
    borderRadius: responsiveWidth(24),
    // width: responsiveWidth(115),
    borderWidth: responsiveWidth(1),
    borderColor: styleConst.COLOR.GREY.GREY_20,
  },
  chipTitleInActive: {
    fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,

    color: styleConst.COLOR.DARK.DARK_100,
  },
  chipTitleActive: {
    fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
    // fontSize: styleConst.FONT_SIZE.TITLE_3,
    color: styleConst.COLOR.VIOLET.VIOLET_100,
  },
});
