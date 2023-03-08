import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { globalStyle } from "../../../../style/global.style";
import { styleConst } from "../../../../style/root.style";
import { styles } from "./AddAccount.style";
import SimpleHeader from "../../../../components/atoms/header/SimpleHeader";

import LargeButton from "../../../../components/atoms/button/LargeButton";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { images } from "../../../../constant/images.contant";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../../utils/ResponsiveUI";

const data = [
  { label: "Cash", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
];

const AddAccount = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View
      style={{ flex: 1, backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100 }}
    >
      <SimpleHeader back threeDot title={"Add new account"} />
      <View style={styles.balanceSection}>
        <Text style={styles.subTitle}>Balance</Text>
        <Text style={styles.Title}>{`\u20B900.0`}</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Name"
            keyboardType="default"
            onChangeText={(e) => {}}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text>Account Type</Text>
        </View>
        <View style={styles.imageGroup}>
          <View style={styles.imageWrapperBox}>
            <Image
              source={images.ADD_ACCOUNT.BANK_LOGOS.SBI}
              style={{
                height: responsiveHeight(24),
                width: responsiveWidth(24),
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={styles.imageWrapperBox}>
            <Image
              source={images.ADD_ACCOUNT.BANK_LOGOS.AXIS}
              style={{
                height: responsiveHeight(24),
                width: responsiveWidth(24),
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={styles.imageWrapperBox}>
            <Image
              source={images.ADD_ACCOUNT.BANK_LOGOS.PNB}
              style={{
                height: responsiveHeight(24),
                width: responsiveWidth(24),
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={styles.imageWrapperBox}>
            <Image
              source={images.ADD_ACCOUNT.BANK_LOGOS.SBI}
              style={{
                height: responsiveHeight(24),
                width: responsiveWidth(24),
                resizeMode: "contain",
              }}
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <LargeButton title="Let’s go" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default AddAccount;
