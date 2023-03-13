import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "../helper/ResponsiveUI";
import { styleConst } from "./root.style";

export const globalStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: styleConst.MARGIN.MARGIN_HORIZONTAL,
    // padding:20
  },
  textInputBox: {
    height: responsiveHeight(63),
    width: "100%",
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: styleConst.COLOR.LIGHT.LIGHT_100,
    borderWidth: responsiveHeight(2),
    marginTop: responsiveHeight(24),
    borderRadius: responsiveHeight(18),
    paddingHorizontal: responsiveWidth(15),
    color: styleConst.COLOR.DARK.DARK_50,
    fontSize: responsiveHeight(16),
    fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
  },
  textInputBoxWithIcon: {
    height: responsiveHeight(63),
    width: "100%",
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: styleConst.COLOR.LIGHT.LIGHT_100,
    borderWidth: responsiveHeight(2),
    marginTop: responsiveHeight(24),
    borderRadius: responsiveHeight(18),
    paddingHorizontal: responsiveWidth(15),
    flexDirection: "row",
  },
  textInputOnlyText: {
    height: "100%",
    width: "100%",
    alignItems: "stretch",
    color: styleConst.COLOR.DARK.DARK_50,
    fontSize: responsiveHeight(16),
    fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
  },
});
