import { StyleSheet, View, Modal } from "react-native";
import React from "react";
import { responsiveHeight, responsiveWidth } from "../../../helper/ResponsiveUI";
import LargeButton from "../../atoms/button/LargeButton";
import { styleConst } from "../../../theme/root.style";

export default function BottomSheet({ isPress, onPress, children }) {
  return (
    <Modal transparent animationType="none" visible={isPress} onRequestClose={onPress}>
      <View style={{ flex: 1, backgroundColor: "rgba(52,52,52,0.5)" }}>
        <View style={{ flex: 1 }}></View>

        <View
          style={{
            padding: responsiveHeight(25),
            backgroundColor: styleConst.COLOR.LIGHT.LIGHT_100,
            borderTopRightRadius: responsiveWidth(30),
            borderTopLeftRadius: responsiveWidth(30),
            elevation: responsiveHeight(10),
            backgroundColor:"pink"
          }}
        >
          {children}

          <LargeButton title="Button" style={{ marginTop: responsiveHeight(25) }} />
        </View>
      </View>
    </Modal>
  );
}
