import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-simple-toast";
import { ScreenNavigationProp } from "../../../interface/Navigation.interface";
import SimpleHeader from "../../../components/atoms/header/SimpleHeader";
import { styleConst } from "../../../style/root.style";
import { styles } from "./Signup.style";
import { responsiveHeight, responsiveWidth } from "../../../utils/ResponsiveUI";
import LargeButton from "../../../components/atoms/button/LargeButton";
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
      <View style={styles.inputGroup}>
        <View style={styles.inputWrapper}>
          <TextInput
            value={name}
            placeholder="Name"
            keyboardType="default"
            onChangeText={(e) => setName(e)}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            value={password}
            placeholder="Password"
            onChangeText={(e) => setPassWord(e)}
          />
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <View style={{  }}>
          <LargeButton
            title="Sign Up"
            onPress={() => {
              navigation.navigate("Signup");
            }}
          />
        </View>
        <Text
          style={{
            fontSize: styleConst.FONT_SIZE.SMALL,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          or With
        </Text>
        <View style={{  }}>
          <LargeButton
            onPress={() => {
              navigation.navigate("Login");
            }}
            buttonTextColor={styleConst.COLOR.VIOLET.VIOLET_100}
            title="Sign Up with Google"
            style={{
              marginVertical: responsiveHeight(16),
              backgroundColor: styleConst.COLOR.VIOLET.VIOLET_20,
            }}
          />
        </View>
        <Text
          style={{
            fontSize:styleConst.FONT_SIZE.REGULAR_1,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Already have an account? <Text style={{textDecorationLine:"underline",color:styleConst.COLOR.VIOLET.VIOLET_100}}>Login</Text> 
        </Text>
      </View>
    </View>
  );
}
