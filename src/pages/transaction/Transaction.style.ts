import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../helper/ResponsiveUI";
import { styleConst } from "../../theme/root.style";

export const styles = StyleSheet.create({
  headerNavSection: {},
  tinyHeroSection: {
    marginTop: responsiveHeight(10),
    padding: responsiveWidth(14.5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: responsiveWidth(8),
    backgroundColor: styleConst.COLOR.VIOLET.VIOLET_20,
  },
  transactionSection: {
    marginTop: responsiveHeight(21),
  },
  heroSectionTitle: {
    fontSize: styleConst.FONT_SIZE.TITLE_3,
    color: styleConst.COLOR.VIOLET.VIOLET_100,
    fontFamily: styleConst.FONT_FAMILY.PRIMARY,
  },
  minusIcon: {
    width: responsiveWidth(40),
    padding: responsiveHeight(3),
    backgroundColor: styleConst.COLOR.VIOLET.VIOLET_40,
    borderRadius: responsiveWidth(5),
  },
  bottomSheetHead: {
    // width: "100%",
    alignItems: "center",
  },
  resetWrapper: {
    marginTop: responsiveWidth(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterChipGroup: {
    marginTop: responsiveWidth(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: responsiveWidth(10),
  },
  filterWrapper: {
    width: "100%",
    marginTop: responsiveWidth(16),
  },
  resetText: {
    fontSize: styleConst.FONT_SIZE.TITLE_3,
    color: styleConst.COLOR.DARK.DARK_100,
    fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
  },
});
