import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";
import { styleConst } from "../../../theme/root.style";

export const styles = StyleSheet.create({
  topSection: {
    flex: 1,
    alignItems: "center",
    gap: responsiveWidth(32),
  },
  bottomSection: {},
  buttonWrapper: {
    marginBottom: responsiveHeight(10),
  },
  chipSection: {
    backgroundColor: styleConst.COLOR.LIGHT.LIGHT_40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(156),
    gap: responsiveWidth(15),
    padding: responsiveWidth(8),
    borderRadius: responsiveWidth(15),
    borderWidth: responsiveWidth(0.5),
    borderColor: styleConst.COLOR.LIGHT.LIGHT_100,
  },
  progressSection: {
    alignItems: "center",
    gap: responsiveWidth(32),
  },
  progressContentWrapper: {
    alignItems: "center",
  },
  alertSection: {
    backgroundColor: styleConst.COLOR.RED.RED_100,
    flexDirection: "row",
    padding: responsiveWidth(8),
    borderRadius: responsiveWidth(20),
    gap: responsiveWidth(10),
  },
});
