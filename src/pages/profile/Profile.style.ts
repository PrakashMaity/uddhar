import { StyleSheet } from "react-native";
import { styleConst } from "../../style/root.style";
import { responsiveHeight, responsiveWidth } from "../../utils/ResponsiveUI";

export const styles = StyleSheet.create({
    headerSection:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-evenly',
        gap:responsiveWidth(19),
        marginTop:responsiveHeight(30)
    },
    profileImageWrapper:{
        width:responsiveWidth(80),
        height:responsiveHeight(80),
        borderWidth:responsiveWidth(1.5),
        borderColor:styleConst.COLOR.VIOLET.VIOLET_100,
        borderRadius:responsiveWidth(40),
        padding:responsiveWidth(2)
    },
    nameSection:{
flex:1,
justifyContent:'center'
    },
    subTitle:{
        fontSize:styleConst.FONT_SIZE.REGULAR_3
    },
    Title:{
        fontSize:styleConst.FONT_SIZE.TITLE_2,
        color:styleConst.COLOR.DARK.LIGHT_75

    },
    editSection:{
        justifyContent:'center'

    },
    bodyList:{
        marginTop:responsiveHeight(40),
        backgroundColor:"white",
        borderRadius:responsiveWidth(15),
        padding:responsiveWidth(16),
        gap:responsiveHeight(18)
    },
    listBox:{
        flexDirection:'row',
        alignItems:'center',
        gap:responsiveWidth(10),
        marginBottom:responsiveHeight(15)
    },
    listTitle:{
        fontSize:styleConst.FONT_SIZE.REGULAR_1,
        color:styleConst.COLOR.DARK.DARK_25
    }
})
