import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { globalStyle } from "../../../../style/global.style";
import { styleConst } from "../../../../style/root.style";
import { styles } from "./AddAccount.style";
import SimpleHeader from "../../../../components/atoms/header/SimpleHeader";

import LargeButton from "../../../../components/atoms/button/LargeButton";

const AddAccount = () => {
    const [service, setService] = React.useState("");

  return (
    <View
      style={{ flex: 1, backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100 }}
    >
      <SimpleHeader back threeDot title={"Add new account"} />
      <View style={styles.balanceSection}>
        <Text style={styles.subTitle}>Balance</Text>
        <Text style={styles.Title}>$00.0</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Name"
            keyboardType="default"
            onChangeText={(e) => {}}
          />
        </View>
        {/* <View style={styles.inputWrapper}> */}
          
        {/* </View> */}
        <View style={styles.buttonWrapper}>
        <LargeButton title="Let’s go" onPress={() => {}} />
      </View>
      </View>
    </View>
  );
};

export default AddAccount;
