import { StyleSheet } from "react-native";
import { styleConst } from "../../../style/root.style";
import { responsiveHeight, responsiveWidth } from "../../../utils/ResponsiveUI";

export const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100 },
    imageWrapper: { height: responsiveHeight(85), width: responsiveHeight(85), position: "absolute", top: responsiveHeight(374), left: responsiveWidth(118) },
    mainImages:{ height: "100%", width: "100%", resizeMode: "cover" },
    mainTitle:{ marginTop: responsiveHeight(372), marginLeft: responsiveWidth(89), fontSize: responsiveHeight(53), fontFamily: styleConst.FONT_FAMILY.INTER_BOLD, color: styleConst.COLOR.LIGHT.LIGHT_100, lineHeight: responsiveHeight(67.77) }
})