import { StyleSheet } from "react-native";
import { styleConst } from "../../../style/root.style";
import { responsiveHeight, responsiveWidth } from "../../../utils/ResponsiveUI";

export const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: "white" },
    inputWrapper:{
        height: responsiveHeight(65),
        width: "100%",
        alignSelf: "center",
        backgroundColor: "white",
        borderColor: styleConst.COLOR.LIGHT.LIGHT_100,
        borderWidth: responsiveHeight(2),
        marginTop:responsiveHeight(24),
        borderRadius:responsiveHeight(18),
        paddingHorizontal:responsiveWidth(10),
        color:styleConst.COLOR.LIGHT.LIGHT_20,
        fontSize:responsiveHeight(18)
      },
    input:{

    },
    inputGroup:{
        marginTop:responsiveHeight(50),
        
    },
    buttonGroup:{
        marginTop:responsiveHeight(27)
    }
})