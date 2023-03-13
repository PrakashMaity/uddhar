import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../helper/ResponsiveUI";
import { styleConst } from "../../theme/root.style";

export const styles = StyleSheet.create({
    heroSection:{
        height:responsiveHeight(260),
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
fontSize:styleConst.FONT_SIZE.REGULAR_1
    },
    price:{
        fontSize:styleConst.FONT_SIZE.TITLE_X,
        color:styleConst.COLOR.DARK.DARK_100,
        fontFamily:styleConst.FONT_FAMILY.INTER_SEMIBOLD
    },
    listSection:{
        flex:1,
        flexDirection:'column',
        gap:responsiveWidth(10)
    },
    buttonWrapper:{
        marginBottom:responsiveHeight(10)
    }
})