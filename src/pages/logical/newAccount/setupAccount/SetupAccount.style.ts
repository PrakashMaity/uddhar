import { StyleSheet } from "react-native";
import { styleConst } from "../../../../style/root.style";
import { responsiveWidth } from "../../../../utils/ResponsiveUI";

export const styles = StyleSheet.create({
    upperSection:{
        flex:1
    },
    titleWrapper: {
        marginTop: responsiveWidth(67)
    },
    title: {
        fontSize: styleConst.FONT_SIZE.TITLE_1,
        color:styleConst.COLOR.DARK.LIGHT_50
    },
    descriptionWrapper: {
        marginTop: responsiveWidth(37),
    

    },
    description: {
        fontSize:styleConst.FONT_SIZE.REGULAR_1,
        color:styleConst.COLOR.DARK.DARK_25

    },
    buttonWrapper: {
marginBottom:responsiveWidth(16)
    }

})