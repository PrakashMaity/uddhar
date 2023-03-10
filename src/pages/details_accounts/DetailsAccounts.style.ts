import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../helper/ResponsiveUI";
import { styleConst } from "../../theme/root.style";

export const styles = StyleSheet.create({
  heroSection: {
    height: responsiveHeight(260),
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: styleConst.FONT_SIZE.TITLE_2,
    color: styleConst.COLOR.DARK.LIGHT_100,
    fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
  },
  listContainer: {
    gap: responsiveHeight(10),
  },
  dateListContainer: {},
  dateText: {
    fontSize: styleConst.FONT_SIZE.TITLE_3,
    fontFamily: styleConst.FONT_FAMILY.INTER_BOLD,
    marginBottom: responsiveHeight(13),
    color: styleConst.COLOR.DARK.LIGHT_100,
  },
  price: {
    fontSize: styleConst.FONT_SIZE.TITLE_1,
    color: styleConst.COLOR.DARK.LIGHT_100,
    fontFamily: styleConst.FONT_FAMILY.INTER_BOLD,
  },
  listSection: {
    flex: 1,
    flexDirection: "column",
    gap: responsiveWidth(10),
  },
  buttonWrapper: {
    marginBottom: responsiveHeight(10),
  },
});
