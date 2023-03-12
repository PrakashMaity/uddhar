import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-simple-toast";
import { ScreenNavigationProp } from "../../../interface/Navigation.interface";
import SimpleHeader from "../../../components/atoms/header/SimpleHeader";
import { styleConst } from "../../../theme/root.style";

import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";
import LargeButton from "../../../components/atoms/button/LargeButton";
import LogoWithButton from "../../../components/atoms/button/LogoWithButton";
import { images } from "../../../constant/images.contant";
import Ionicons from "react-native-vector-icons/Ionicons";
import { globalStyle } from "../../../theme/global.style";
import { styles } from "./Login.style";
export default function Login() {
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
      <SimpleHeader back title="Login" />

      <View style={{ flex: 1, marginHorizontal: responsiveWidth(20) }}>
        <View style={styles.inputGroup}>
          <TextInput
            value={email}
            placeholder="Email"
            placeholderTextColor={styleConst.COLOR.GREY.GREY_20}
            keyboardType="email-address"
            onChangeText={(e) => setEmail(e)}
            style={globalStyle.textInputBox}
          />
          <View style={globalStyle.textInputBoxWithIcon}>
            <View style={{ flex: 1 }}>
              <TextInput
                value={password}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor={styleConst.COLOR.GREY.GREY_20}
                onChangeText={(e) => setPassWord(e)}
                style={globalStyle.textInputOnlyText}
              />
            </View>
            <Pressable
              onPress={() => {
                onSignUpHandler();
              }}
              style={{
                paddingHorizontal: responsiveWidth(1),
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="eye-outline"
                // ios-eye-off-outline
                color={styleConst.COLOR.GREY.GREY_20}
                size={responsiveWidth(25)}
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <View style={{}}>
            <LargeButton
              title="Login"
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
          </View>
          <Text
            style={{
              fontSize: responsiveHeight(19),
              fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
              marginTop: 20,
              textAlign: "center",
              color: styleConst.COLOR.VIOLET.VIOLET_100,
            }}
          >
            Forgot password?
          </Text>
          <Text
            style={{
              fontSize: responsiveHeight(18),
              fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
              marginTop: 20,
              textAlign: "center",
              color: styleConst.COLOR.DARK.DARK_50,
            }}
          >
            Don’t have an account yet?{" "}
            <Text
              onPress={() => navigation.navigate("Signup")}
              style={{
                textDecorationLine: "underline",
                color: styleConst.COLOR.VIOLET.VIOLET_100,
              }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
