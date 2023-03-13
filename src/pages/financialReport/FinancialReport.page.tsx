import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { globalStyle } from "../../theme/global.style";
import { LineChart, PieChart } from "react-native-chart-kit";
import { responsiveHeight, responsiveWidth } from "../../helper/ResponsiveUI";
import { styleConst } from "../../theme/root.style";
import SimpleHeader from "../../components/atoms/header/SimpleHeader";
import ChipIcon from "../../components/atoms/chipIcon/ChipIcon.atom";
import AntDesign from "react-native-vector-icons/AntDesign";
import MonthSelectionHeader from "../../components/atoms/header/MonthSelectionHeader";
import ListIcon2 from "../../components/molecules/listIcon/ListIcon2.molecules";
const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];
const FinancialReport = () => {
  const width = Dimensions.get("window").width;
  const [isFilterModal, setIsFilterModal] = useState(false);
  const onpressFilterButton = () =>
    setIsFilterModal((isFilterModal) => !isFilterModal);
  return (
    <View style={[globalStyle.mainContainer, { backgroundColor: "white" }]}>
      <SimpleHeader back title="Financial Report" />
      <View style={styles.chartHeader}>
        <ChipIcon title="Month" isActive={false} />
        <View style={styles.graphToggleWrapper}>
          <View style={[styles.iconBox]}>
            <AntDesign
              name="linechart"
              size={responsiveWidth(25)}
              color={"white"}
            />
          </View>
          <View style={[styles.iconBox, { backgroundColor: "white" }]}>
            <AntDesign
              name="piechart"
              size={responsiveWidth(25)}
              color={styleConst.COLOR.VIOLET.VIOLET_100}
            />
          </View>
        </View>
      </View>
      <View style={styles.chartWrapper}>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={width - 2 * styleConst.MARGIN.MARGIN_HORIZONTAL}
          height={220}
          yAxisLabel="₹"
          //   yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: `rgba(139, 80, 255, 0.24)`,
            backgroundGradientTo: `rgba(139, 80, 255, 0)`,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={styles.financeWrapper}>
        <View
          style={[
            styles.financeBox,
            { backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100 },
          ]}
        >
          <Text style={styles.financeBoxText}>Expense</Text>
        </View>
        <View style={styles.financeBox}>
          <Text>Income</Text>
        </View>
      </View>
      <View style={styles.headerNavSection}>
        <MonthSelectionHeader filteronPress={onpressFilterButton} />
      </View>
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
  );
};

export default FinancialReport;

const styles = StyleSheet.create({
  chartWrapper: {
    width: "100%",
  },
  chartHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  graphToggleWrapper: {
    flexDirection: "row",
    width: responsiveWidth(100),
    height: responsiveHeight(48),
    justifyContent: "space-between",
    borderRadius: responsiveWidth(10),
    backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100,
    overflow: "hidden",
    borderWidth: responsiveWidth(0.5),
    borderColor: styleConst.COLOR.GREY.GREY_20,
  },
  iconBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  financeWrapper: {
    flexDirection: "row",
    // width: responsiveWidth(100),
    height: responsiveHeight(64),
    justifyContent: "space-between",
    borderRadius: responsiveWidth(20),
    backgroundColor: "#F1F1FA",
    overflow: "hidden",
    borderWidth: responsiveWidth(0.5),
    borderColor: styleConst.COLOR.GREY.GREY_20,
  },
  financeBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: responsiveWidth(3),
    borderRadius: responsiveWidth(20),
  },
  financeBoxText: {
    color: "white",
    fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
    fontSize: styleConst.FONT_SIZE.TITLE_3,
  },
  headerNavSection: {},
  listContainer: {
    gap: responsiveHeight(10),
  },
});
