import { StyleSheet } from "react-native";
import { styleConst } from "../../../theme/root.style";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";

export const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: responsiveWidth(16),
  },
  inputWrapper: {
    height: 50,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: styleConst.COLOR.LIGHT.LIGHT_100,
    borderWidth: 1,
    marginTop: responsiveHeight(24),
    borderRadius: 16,
  },
  input: {},
  inputGroup: {
    marginTop: responsiveHeight(56),
  },
  buttonGroup: {
    marginTop: responsiveHeight(80),
  },
});
>>>>>>> d5acee7e8fd388b5b2cc7ab1c65d19d5ddaaf7e1
