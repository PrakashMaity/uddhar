import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./Transaction.style";
import { globalStyle } from "../../theme/global.style";
import MonthSelectionHeader from "../../components/atoms/header/MonthSelectionHeader";
import BottomSheet from "../../components/molecules/modals/BottomSheet";
import Feather from "react-native-vector-icons/Feather";
import { styleConst } from "../../theme/root.style";
import { responsiveHeight, responsiveWidth } from "../../helper/ResponsiveUI";
import DateList from "../../components/molecules/dateList/DateList.molecules";
import LargeButton from "../../components/atoms/button/LargeButton";
import Foundation from "react-native-vector-icons/Foundation";
import ChipIcon from "../../components/atoms/chipIcon/ChipIcon.atom";
const Transaction = () => {
  const [isFilterModal, setIsFilterModal] = useState(false);
  const onpressFilterButton = () =>
    setIsFilterModal((isFilterModal) => !isFilterModal);
  return (
    <>
      <BottomSheet isPress={isFilterModal} onPress={onpressFilterButton}>
        <View style={styles.bottomSheetHead}>
          <View style={styles.minusIcon} />
        </View>
        <View style={styles.resetWrapper}>
          <Text style={styles.resetText}>Filter Transaction</Text>
          <ChipIcon title="Reset" size="small" />
        </View>
        <View style={styles.filterWrapper}>
          <Text style={styles.resetText}>Filter By</Text>
          <View style={styles.filterChipGroup}>
            <ChipIcon title="Income" isActive={false} />
            <ChipIcon title="Expense" />
            <ChipIcon title="Transfer" isActive={false} />
          </View>
        </View>
        <View style={styles.filterWrapper}>
          <Text style={styles.resetText}>Sort By</Text>
          <View style={styles.filterChipGroup}>
            <ChipIcon title="Highest" isActive={false} />
            <ChipIcon title="Lowest" isActive={false} />
            <ChipIcon title="Newest" isActive={false} />
            <ChipIcon title="Oldest" isActive={false} />
          </View>
        </View>
        <LargeButton
          title="Apply"
          style={{ marginTop: responsiveHeight(25) }}
        />
      </BottomSheet>
      <View style={globalStyle.mainContainer}>
        <View style={styles.headerNavSection}>
          <MonthSelectionHeader filteronPress={onpressFilterButton} />
        </View>
        <View style={styles.tinyHeroSection}>
          <Text style={styles.heroSectionTitle}>See your financial report</Text>
          <Feather
            name="chevron-right"
            color={styleConst.COLOR.VIOLET.VIOLET_100}
            size={responsiveWidth(30)}
          />
        </View>
        <View style={styles.transactionSection}>
          <DateList />
        </View>
      </View>
    </>
  );
};

export default Transaction;
