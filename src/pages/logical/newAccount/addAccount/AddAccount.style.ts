import { StyleSheet } from "react-native";
import { globalStyle } from "../../../../style/global.style";
import { styleConst } from "../../../../style/root.style";
import { responsiveHeight, responsiveWidth } from "../../../../utils/ResponsiveUI";

export const styles = StyleSheet.create({
    balanceSection: {
        ...globalStyle.mainContainer,
        justifyContent: 'flex-end'

    },
    subTitle: {
        fontSize: styleConst.FONT_SIZE.TITLE_3,
        color:styleConst.COLOR.LIGHT.LIGHT_80
    },
    Title: {
        fontSize: styleConst.FONT_SIZE.TITLE_X,
        color:styleConst.COLOR.LIGHT.LIGHT_80

    },
    inputWrapper:{
        height: 50,
        width: "100%",
        alignSelf: "center",
        backgroundColor: "white",
        borderColor: styleConst.COLOR.LIGHT.LIGHT_100,
        borderWidth: 1,
        marginTop:responsiveHeight(24),
        borderRadius:16
      },
    input:{

    },
    buttonWrapper: {
        marginBottom:responsiveWidth(16),
        marginTop:responsiveHeight(16)
            },
    bottomSection: {
        marginTop:responsiveHeight(8),
        backgroundColor:"white",
        borderTopRightRadius:responsiveWidth(32),
        borderTopLeftRadius:responsiveWidth(32),
        paddingHorizontal:responsiveHeight(16),
        paddingVertical:responsiveHeight(24)
    }
})