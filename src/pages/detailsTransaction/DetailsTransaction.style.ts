import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../helper/ResponsiveUI";
import { globalStyle } from "../../theme/global.style";
import { styleConst } from "../../theme/root.style";

export const styles = StyleSheet.create({
    headerSection: {
        backgroundColor: styleConst.COLOR.RED.RED_100,
        borderBottomRightRadius: responsiveWidth(80),
        borderBottomLeftRadius: responsiveWidth(80)
    },
    headerContentSection: {
        alignItems: 'center',
        gap: responsiveWidth(5),
        marginVertical: responsiveHeight(30),
        marginBottom: responsiveHeight(100),

    },
    priceText: {
        fontSize: styleConst.FONT_SIZE.TITLE_X,
        color: styleConst.COLOR.LIGHT.LIGHT_100,
        fontFamily: styleConst.FONT_FAMILY.INTER_BOLD
    },
    detailsText: {
        fontSize: styleConst.FONT_SIZE.REGULAR_1,
        color: styleConst.COLOR.LIGHT.LIGHT_100,
        fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD


    },
    dateText: {
        fontSize: styleConst.FONT_SIZE.SMALL,
        color: styleConst.COLOR.LIGHT.LIGHT_100
    },
    buttonWrapper: {
        marginBottom: responsiveWidth(16),
        marginTop: responsiveHeight(16),
        paddingHorizontal: styleConst.MARGIN.MARGIN_HORIZONTAL,


    },
    boxSection: {
        width: "80%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor:styleConst.COLOR.LIGHT.LIGHT_60,
        paddingVertical:responsiveHeight(15),
        position:'absolute',
        bottom:-20,
        right:40,
        borderRadius:responsiveWidth(10),
        borderColor:styleConst.COLOR.GREY.GREY_20,
        borderWidth:responsiveWidth(0.5)
    },
    contentSection: {
alignItems:'center'
    },
    boxKey:{
        fontSize: styleConst.FONT_SIZE.SMALL,
        color: styleConst.COLOR.DARK.DARK_50
    },
    boxValue:{
        fontSize: styleConst.FONT_SIZE.REGULAR_1,
        color: styleConst.COLOR.DARK.DARK_100,
        fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD
    },
    bodySection:{
        ...globalStyle.mainContainer,

    },
    descriptionSection:{
        marginTop:responsiveHeight(40),
        gap:responsiveHeight(5)
    },
    descriptionTitle:{

    },
    descriptionText:{
color:styleConst.COLOR.DARK.DARK_100,
fontSize:styleConst.FONT_SIZE.REGULAR_1,
fontFamily:styleConst.FONT_FAMILY.INTER_SEMIBOLD
    },
    ImageSection:{
        marginVertical:responsiveHeight(10),
        gap:responsiveHeight(5)

    },
    imageWrapper:{
        width:'100%',
alignItems:'center',
justifyContent:'center'
    }
})