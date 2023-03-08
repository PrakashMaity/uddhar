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
        borderRadius:16,
        justifyContent:'center',
        paddingLeft:5
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
    },
    imageGroup:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      marginTop:responsiveHeight(16)
    },
    imageWrapperBox:{
      width:responsiveWidth(80),
      height:responsiveHeight(40),
      borderRadius:responsiveWidth(8),
      backgroundColor:styleConst.COLOR.VIOLET.VIOLET_20,
      alignItems:'center',
      justifyContent:'center'
    },
    // dropdown: {
    //     height: 50,
    //     width: "100%",
    //     alignSelf: "center",
    //     backgroundColor: "white",
    //     borderColor: styleConst.COLOR.LIGHT.LIGHT_100,
    //     borderWidth: 1,
    //     marginTop:responsiveHeight(24),
    //     borderRadius:16
    //   },
    //   icon: {
    //     marginRight: 5,
    //   },
    //   label: {
    //     position: 'absolute',
    //     backgroundColor: 'white',
    //     left: 22,
    //     top: 8,
    //     zIndex: 999,
    //     paddingHorizontal: 8,
    //     fontSize: 14,
    //   },
    //   placeholderStyle: {
    //     fontSize: 16,
    //   },
    //   selectedTextStyle: {
    //     fontSize: 16,
    //   },
    //   iconStyle: {
    //     width: 20,
    //     height: 20,
    //   },
    //   inputSearchStyle: {
    //     height: 40,
    //     fontSize: 16,
    //   },
})