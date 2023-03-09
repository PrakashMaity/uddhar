import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { styleConst } from "../../../../theme/root.style";
import { styles } from "./AddAccount.style";
import SimpleHeader from "../../../../components/atoms/header/SimpleHeader";
import LargeButton from "../../../../components/atoms/button/LargeButton";
import { images } from "../../../../constant/images.contant";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../../helper/ResponsiveUI";

const AddAccount = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100 }}
    >
      <SimpleHeader theme="light" back threeDot title={"Add new account"} />
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
          <View style={[styles.imageWrapperBox, styles.imageWrapperBoxActive]}>
            <Image
              source={images.ADD_ACCOUNT.BANK_LOGOS.AXIS}
              style={{
                height: responsiveHeight(24),
                width: responsiveWidth(24),
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={[styles.imageWrapperBox, styles.imageWrapperBoxActive]}>
            <Image
              source={images.ADD_ACCOUNT.BANK_LOGOS.SBI}
              style={{
                height: responsiveHeight(24),
                width: responsiveWidth(24),
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={[styles.imageWrapperBox, styles.imageWrapperBoxActive]}>
            <Image
              source={images.ADD_ACCOUNT.BANK_LOGOS.AXIS}
              style={{
                height: responsiveHeight(24),
                width: responsiveWidth(24),
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={[styles.imageWrapperBox, styles.imageWrapperBoxActive]}>
            <Image
              source={images.ADD_ACCOUNT.BANK_LOGOS.SBI}
              style={{
                height: responsiveHeight(24),
                width: responsiveWidth(24),
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={[styles.imageWrapperBox, styles.imageWrapperBoxActive]}>
            <Image
              source={images.ADD_ACCOUNT.BANK_LOGOS.PNB}
              style={{
                height: responsiveHeight(24),
                width: responsiveWidth(24),
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={[styles.imageWrapperBox, styles.imageWrapperBoxActive]}>
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
            <Text style={styles.bankBoxText}>See other</Text>
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
