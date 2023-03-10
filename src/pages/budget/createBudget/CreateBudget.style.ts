import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";
import { globalStyle } from "../../../theme/global.style";
import { styleConst } from "../../../theme/root.style";

export const styles = StyleSheet.create({
  balanceSection: {
    ...globalStyle.mainContainer,
    justifyContent: "flex-end",
  },
  subTitle: {
    fontSize: styleConst.FONT_SIZE.TITLE_3,
    color: styleConst.COLOR.LIGHT.LIGHT_80,
  },
  Title: {
    fontSize: styleConst.FONT_SIZE.TITLE_X,
    color: styleConst.COLOR.LIGHT.LIGHT_80,
  },
  inputWrapper: {
    height: 50,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: styleConst.COLOR.LIGHT.LIGHT_100,
    borderWidth: 1,
    marginTop: responsiveHeight(24),
    borderRadius: 16,
    justifyContent: "space-between",
    paddingLeft: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(10),
  },
  input: {},
  buttonWrapper: {
    marginBottom: responsiveWidth(16),
    marginTop: responsiveHeight(16),
  },
  bottomSection: {
    marginTop: responsiveHeight(8),
    backgroundColor: "white",
    borderTopRightRadius: responsiveWidth(32),
    borderTopLeftRadius: responsiveWidth(32),
    paddingHorizontal: responsiveHeight(16),
    paddingVertical: responsiveHeight(24),
  },
  imageGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: responsiveHeight(16),
    flexWrap: "wrap",
    gap: responsiveHeight(8),
  },
  imageWrapperBox: {
    width: responsiveWidth(80),
    height: responsiveHeight(40),
    borderRadius: responsiveWidth(8),
    backgroundColor: styleConst.COLOR.VIOLET.VIOLET_20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapperBoxActive: {
    backgroundColor: "#F1F1FA",
  },
  bankBoxText: {
    color: styleConst.COLOR.VIOLET.VIOLET_100,
    fontSize: styleConst.FONT_SIZE.SMALL,
  },
  switchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: responsiveHeight(13),
    marginHorizontal: responsiveWidth(3),
  },
  switchSectionLeft: {
    flex: 1,
  },
  switchSectionLeftTitle: {
    fontSize: styleConst.FONT_SIZE.REGULAR_1,
    fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
    color: styleConst.COLOR.DARK.DARK_25,
  },
  switchSectionLeftSubTitle: {
    fontSize: styleConst.FONT_SIZE.SMALL,
  },
  switchSectionRight: {},
  sliderSection: {},
});
