import { StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { styles } from "./Empty.style";
import AntDesign from "react-native-vector-icons/AntDesign";
import { responsiveWidth } from "../../../helper/ResponsiveUI";
import { globalStyle } from "../../../theme/global.style";
import LargeButton from "../../../components/atoms/button/LargeButton";
const EmptyBudget = () => {
  return (
    <View style={styles.mainScreen}>
      <View style={styles.monthSlider}>
        <View style={styles.leftSection}>
          <AntDesign name="left" size={responsiveWidth(20)} color={"white"} />
        </View>
        <View style={styles.centerSection}>
          <Text style={styles.monthTitle}>May</Text>
        </View>
        <View style={styles.rightSection}>
          <AntDesign name="right" size={responsiveWidth(20)} color={"white"} />
        </View>
      </View>
      <View style={[globalStyle.mainContainer, styles.bodySection]}>
        <View style={styles.topSection}>
          <Text>You don’t have a budget.</Text>
          <Text>Let’s make one so you in control.</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <LargeButton title="Create a budget" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default EmptyBudget;
