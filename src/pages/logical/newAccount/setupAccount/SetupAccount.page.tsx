import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "../../../../theme/global.style";
import { styleConst } from "../../../../theme/root.style";
import { styles } from "./SetupAccount.style";
import LargeButton from "../../../../components/atoms/button/LargeButton";

const SetupAccount = () => {
  return (
    <View style={[globalStyle.mainContainer, { backgroundColor: "white" }]}>
      <View style={styles.upperSection}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{`Let’s setup your \naccount!`}</Text>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text
            style={styles.description}
          >{`Account can be your bank, credit card or \nyour wallet.`}</Text>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <LargeButton title="Let’s go" onPress={() => {}} />
      </View>
    </View>
  );
};

export default SetupAccount;
