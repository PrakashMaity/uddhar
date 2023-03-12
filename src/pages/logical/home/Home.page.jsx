import { StyleSheet, View, Modal,Text } from "react-native";
import React, { useState } from "react";
import { globalStyle } from "../../../theme/global.style";
import SimpleHeader from "../../../components/atoms/header/SimpleHeader";
import LargeButton from "../../../components/atoms/button/LargeButton";
import SmallButton from "../../../components/atoms/button/SmallButton";
import MonthSelectionHeader from "../../../components/atoms/header/MonthSelectionHeader";
import { responsiveHeight, responsiveWidth } from "../../../helper/ResponsiveUI";
import BottomSheet from "../../../components/molecules/modals/BottomSheet";

const Home = () => {

  const [isFilterModal, setIsFilterModal] = useState(false)

  const onpressFilterButton = () => setIsFilterModal(isFilterModal => !isFilterModal)

  return (
    <View style={styles.main}>
      {/* <SimpleHeader back threeDot title={"Header"} /> */}
      <MonthSelectionHeader
        filteronPress={onpressFilterButton}
      />
      <BottomSheet
        isPress={isFilterModal}
        onPress={onpressFilterButton}
      >
        <View style={{height:150,width:"100%",backgroundColor:"red"}} />
        <View style={{height:200,width:"100%",backgroundColor:"blue"}} />
        
        <Text>ksndnksndksnkdsnk</Text>
      </BottomSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
