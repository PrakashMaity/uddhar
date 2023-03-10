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
    backgroundColor: styleConst.COLOR.LIGHT.LIGHT_80,
    borderTopLeftRadius: responsiveWidth(15),
    borderTopRightRadius: responsiveWidth(15),
  },
  topSection: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginVertical: responsiveHeight(16),
  },
  buttonWrapper: {
    marginBottom: responsiveHeight(10),
  },
  progressBox: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: responsiveWidth(15),
    borderRadius: responsiveWidth(10),
  },
  progressBoxHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressBoxBody: { gap: responsiveWidth(5) },
  chips: {
    width: responsiveWidth(109),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: responsiveWidth(5),
    backgroundColor: styleConst.COLOR.LIGHT.LIGHT_60,
    gap: responsiveWidth(5),
    borderRadius: responsiveWidth(10),
  },
  dot: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(8),
  },
  alertWrapper: {},
});
