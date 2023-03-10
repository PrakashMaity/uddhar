import { StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import SimpleHeader from "../../../components/atoms/header/SimpleHeader";
import { globalStyle } from "../../../theme/global.style";
import { styles } from "./DetailsBudget.style";
import LargeButton from "../../../components/atoms/button/LargeButton";
import { styleConst } from "../../../theme/root.style";
import SquareBox from "../../../components/atoms/squareBox/SquareBox.atom";
import { responsiveWidth } from "../../../helper/ResponsiveUI";
import * as Progress from "react-native-progress";
import Ionicons from "react-native-vector-icons/Ionicons";

const DetailsBudget = () => {
  return (
    <Fragment>
      <SimpleHeader back title={"Detail Budget"} />
      <View style={globalStyle.mainContainer}>
        <View style={styles.topSection}>
          <View style={styles.chipSection}>
            <SquareBox icon={"settings"} theme={"YELLOW"} />
            <Text
              style={{
                color: styleConst.COLOR.DARK.LIGHT_75,
                fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
              }}
            >
              Shopping
            </Text>
          </View>
          <View style={styles.progressSection}>
            <View style={styles.progressContentWrapper}>
              <Text
                style={{
                  fontSize: styleConst.FONT_SIZE.TITLE_2,
                  fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
                  color: styleConst.COLOR.DARK.LIGHT_75,
                }}
              >
                Remaining
              </Text>
              <Text
                style={{
                  fontSize: styleConst.FONT_SIZE.TITLE_X,
                  fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
                  color: styleConst.COLOR.DARK.LIGHT_75,
                }}
              >
                $0
              </Text>
            </View>
            <Progress.Bar
              progress={1}
              color={styleConst.COLOR.YELLOW.YELLOW_100}
              width={responsiveWidth(350)}
              height={responsiveWidth(10)}
            />
          </View>
          <View style={styles.alertSection}>
            <Ionicons
              name="alert-circle"
              color={styleConst.COLOR.LIGHT.LIGHT_100}
              size={responsiveWidth(20)}
            />
            <Text
              style={{
                color: styleConst.COLOR.LIGHT.LIGHT_20,
                fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
              }}
            >
              You’ve exceed the limit
            </Text>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.buttonWrapper}>
            <LargeButton title="Edit" onPress={() => {}} />
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default DetailsBudget;
