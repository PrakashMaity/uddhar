import { StyleSheet } from "react-native";
import { styleConst } from "../../../theme/root.style";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";

export const styles = StyleSheet.create({
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
