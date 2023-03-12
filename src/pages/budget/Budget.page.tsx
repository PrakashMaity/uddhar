import { StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import React from "react";
import { styles } from "./Budget.style";
import { responsiveWidth } from "../../helper/ResponsiveUI";
import AntDesign from "react-native-vector-icons/AntDesign";
import { globalStyle } from "../../theme/global.style";
import LargeButton from "../../components/atoms/button/LargeButton";
import { styleConst } from "../../theme/root.style";
import Ionicons from "react-native-vector-icons/Ionicons";

const Budget = () => {
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
          <View style={styles.progressBox}>
            <View style={styles.progressBoxHead}>
              <View style={styles.chips}>
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: styleConst.COLOR.YELLOW.YELLOW_100 },
                  ]}
                />
                <Text
                  style={{
                    color: styleConst.COLOR.DARK.DARK_75,
                    fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
                  }}
                >
                  Shopping
                </Text>
              </View>
              <View style={styles.alertWrapper}>
                <Ionicons
                  name="alert-circle"
                  color={styleConst.COLOR.RED.RED_100}
                  size={responsiveWidth(20)}
                />
              </View>
            </View>
            <View style={styles.progressBoxBody}>
              <Text
                style={{
                  fontSize: styleConst.FONT_SIZE.TITLE_2,
                  fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
                  color: styleConst.COLOR.DARK.DARK_75,
                }}
              >
                Remaining $0
              </Text>
              <Progress.Bar
                progress={0.8}
                color={styleConst.COLOR.YELLOW.YELLOW_100}
                width={responsiveWidth(350)}
              />
              <Text style={{ fontSize: styleConst.FONT_SIZE.REGULAR_1 }}>
                $1200 of $1000
              </Text>
              <Text
                style={{
                  fontSize: styleConst.FONT_SIZE.SMALL,
                  color: styleConst.COLOR.RED.RED_100,
                }}
              >
                You’ve exceed the limit!
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <LargeButton title="Create a budget" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default Budget;
