import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { globalStyle } from "../../../../style/global.style";
import { styleConst } from "../../../../style/root.style";
import { styles } from "./PinSetup.style";

const PinSetup = () => {
  return (
    <View
      style={[
        globalStyle.mainContainer,
        { backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100 },
      ]}
    >
      <View style={styles.titleSection}>
        <Text style={styles.title}>
          Let’s setup your PIN
          {/* Ok. Re type your PIN again. */}
        </Text>
      </View>
      <View style={styles.pinInputSection}>
        <View style={styles.textInputWrapperActive}>
          <TextInput  keyboardType="phone-pad" />
        </View>
        <View style={styles.textInputWrapperActive}>
          <TextInput keyboardType="phone-pad" />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput autoFocus={true} keyboardType="phone-pad" />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput keyboardType="phone-pad" />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput keyboardType="phone-pad" />
        </View>
      </View>
    </View>
  );
};

export default PinSetup;
