import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-simple-toast";
import { ScreenNavigationProp } from "../../../interface/Navigation.interface";
import SimpleHeader from "../../../components/atoms/header/SimpleHeader";
import { styleConst } from "../../../theme/root.style";
import { styles } from "./Signup.style";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";
import LargeButton from "../../../components/atoms/button/LargeButton";
import LogoWithButton from "../../../components/atoms/button/LogoWithButton";
import { images } from "../../../constant/images.contant";
import Ionicons from "react-native-vector-icons/Ionicons";
import { globalStyle } from "../../../theme/global.style";
export default function Signup() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const onSignUpHandler = async () => {
    try {
      navigation.navigate("Home");
    } catch (error) {
      console.log("onSignUpHandler", error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SimpleHeader back title="Sign Up" />

      <View style={{ flex: 1, marginHorizontal: responsiveWidth(20) }} >

        <View style={styles.inputGroup}>
          <TextInput
            value={name}
            placeholder="Name"
            placeholderTextColor={styleConst.COLOR.GREY.GREY_20}
            keyboardType="default"
            onChangeText={(e) => setName(e)}
            style={globalStyle.textInputBox}
          />
          <TextInput
            value={email}
            placeholder="Email"
            placeholderTextColor={styleConst.COLOR.GREY.GREY_20}
            keyboardType="email-address"
            onChangeText={(e) => setEmail(e)}
            style={globalStyle.textInputBox}
          />
          <View style={globalStyle.textInputBoxWithIcon}>
            <View style={{ flex: 1 }} >
              <TextInput
                value={password}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor={styleConst.COLOR.GREY.GREY_20}
                onChangeText={(e) => setPassWord(e)}
                style={globalStyle.textInputOnlyText}
              />
            </View>
            <Pressable style={{ paddingHorizontal: responsiveWidth(1), justifyContent: "center" }} >
              <Ionicons
                name="eye-outline"
                // ios-eye-off-outline
                color={styleConst.COLOR.GREY.GREY_20}
                size={responsiveWidth(25)}
              />
            </Pressable>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: responsiveHeight(30), alignItems: "center" }} >
          <View style={{ height: responsiveHeight(24), width: responsiveHeight(24), borderWidth: responsiveHeight(2.5), borderColor: styleConst.COLOR.VIOLET.VIOLET_100, borderRadius: responsiveHeight(5) }} ></View>
          <Text style={{ marginLeft: responsiveWidth(14), fontSize: responsiveHeight(17), lineHeight:responsiveHeight(23), width: "90%", fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD, color: styleConst.COLOR.DARK.LIGHT_50 }} >By signing up, you agree to the <Text style={{ color: styleConst.COLOR.VIOLET.VIOLET_100 }} >Terms of Service and Privacy Policy</Text></Text>
        </View>


        <View style={styles.buttonGroup}>
          <View style={{}}>
            <LargeButton
              title="Sign Up"
              onPress={() => {
                navigation.navigate("Signup");
              }}
            />
          </View>
          <Text
            style={{
              fontSize: responsiveHeight(16),
              marginTop: 20,
              textAlign: "center",
              color: styleConst.COLOR.GREY.GREY_20,
              fontFamily:styleConst.FONT_FAMILY.INTER_SEMIBOLD
            }}
          >
            or With
          </Text>
          <View style={{}}>
            <LogoWithButton
              onPress={() => {
                navigation.navigate("Login");
              }}
              buttonTextColor={styleConst.COLOR.DARK.LIGHT_50}
              title="Sign Up with Google"
              style={{
                marginVertical: responsiveHeight(10),
                backgroundColor: "rgba(52,52,52,0)",
                borderWidth:responsiveHeight(1.5),
                borderColor:styleConst.COLOR.GREY.GREY_20
              }}
              icon={images.SignUp.google}
            />
          </View>
          <Text
            style={{
              fontSize:responsiveHeight(18),
              fontFamily:styleConst.FONT_FAMILY.INTER_SEMIBOLD,
              marginTop: 20,
              textAlign: "center",
              color:styleConst.COLOR.DARK.LIGHT_50
            }}
          >
            Already have an account? <Text onPress={()=>navigation.navigate("Login")} style={{ textDecorationLine: "underline", color: styleConst.COLOR.VIOLET.VIOLET_100 }}>Login</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
