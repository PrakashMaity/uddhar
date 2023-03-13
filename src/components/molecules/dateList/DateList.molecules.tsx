import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "../../../helper/ResponsiveUI";
import ListIcon2 from "../listIcon/ListIcon2.molecules";
import { styleConst } from "../../../theme/root.style";

const DateList = () => {
  return (
    <View style={{ gap: responsiveHeight(13) }}>
      <View style={styles.dateListContainer}>
        <Text style={styles.dateText}>Today</Text>
        <View style={styles.listContainer}>
          <ListIcon2
            content={{
              title: "Wallet",
              icon: "wallet",
              route: "",
              theme: "YELLOW",
            }}
            credit={true}
          />
          <ListIcon2
            content={{
              title: "Wallet",
              icon: "wallet",
              route: "",
              theme: "VIOLET",
            }}
          />
          <ListIcon2
            content={{
              title: "Wallet",
              icon: "wallet",
              route: "",
              theme: "RED",
            }}
          />
        </View>
      </View>
      <View style={styles.dateListContainer}>
        <Text style={styles.dateText}>Yesterday</Text>
        <View style={styles.listContainer}>
          <ListIcon2
            content={{
              title: "Wallet",
              icon: "wallet",
              route: "",
              theme: "YELLOW",
            }}
            credit={true}
          />
        </View>
      </View>
    </View>
  );
};

export default DateList;

const styles = StyleSheet.create({
  listContainer: {
    gap: responsiveHeight(10),
  },
  dateListContainer: {},
  dateText: {
    fontSize: styleConst.FONT_SIZE.TITLE_3,
    fontFamily: styleConst.FONT_FAMILY.INTER_BOLD,
    marginBottom: responsiveHeight(13),
    color: styleConst.COLOR.DARK.DARK_100,
  },
  price: {
    fontSize: styleConst.FONT_SIZE.TITLE_1,
    color: styleConst.COLOR.DARK.DARK_100,
    fontFamily: styleConst.FONT_FAMILY.INTER_BOLD,
  },
  listSection: {
    flex: 1,
    flexDirection: "column",
    gap: responsiveWidth(10),
  },
  buttonWrapper: {
    marginBottom: responsiveHeight(10),
  },
});
