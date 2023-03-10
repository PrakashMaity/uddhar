import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../helper/ResponsiveUI";
import { styleConst } from "../../theme/root.style";

export const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100,
    flex: 1,
  },
  monthSlider: {
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(33),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSection: {},
  centerSection: {},
  monthTitle: {
    color: styleConst.COLOR.LIGHT.LIGHT_100,
    fontSize: styleConst.FONT_SIZE.TITLE_2,
    fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
  },
  rightSection: {},
  bodySection: {
    backgroundColor: "white",
    borderTopLeftRadius: responsiveWidth(15),
    borderTopRightRadius: responsiveWidth(15),
  },
  topSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    marginBottom: responsiveHeight(10),
  },
});
