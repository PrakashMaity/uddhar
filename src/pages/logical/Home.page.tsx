import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { globalStyle } from "../../theme/global.style";
import SimpleHeader from "../../components/atoms/header/SimpleHeader";
import LargeButton from "../../components/atoms/button/LargeButton";
import SmallButton from "../../components/atoms/button/SmallButton";
import LogoWithButton from "../../components/atoms/button/LogoWithButton";
import { styleConst } from "../../theme/root.style";
import { responsiveWidth } from "../../helper/ResponsiveUI";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Home = () => {
  return (
    <View style={globalStyle.mainContainer}>
      <LargeButton
        onPress={() => console.log("pk")}
        title={"Sign Up"}
        plusIcon
      />
      <SmallButton onPress={() => console.log("pk")} title={"Sign Up"} />
      <SimpleHeader back threeDot title={"Header"} />
      <LogoWithButton onPress={() => console.log("pk")} title={"Sign Up"} />
    </View>
  );
};

export default Home;
