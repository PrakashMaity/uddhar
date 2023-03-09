import { StyleSheet } from "react-native";
import { styleConst } from "../../../../theme/root.style";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../../helper/ResponsiveUI";

export const styles = StyleSheet.create({
  titleSection: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveHeight(46),
  },
  title: {
    color: styleConst.COLOR.LIGHT.LIGHT_100,
    fontSize: styleConst.FONT_SIZE.TITLE_3,
  },
  pinInputSection: {
    marginTop: responsiveHeight(92),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textInputWrapperActive: {
    width: responsiveWidth(32),
    height: responsiveHeight(32),
    backgroundColor: "white",
    borderRadius: responsiveWidth(16),
  },
  textInputWrapper: {
    width: responsiveWidth(32),
    height: responsiveHeight(32),
    borderColor: "white",
    borderWidth: responsiveWidth(2),
    borderRadius: responsiveWidth(16),
  },
});
