import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { responsiveHeight, responsiveWidth } from "../../../helper/ResponsiveUI";
import LargeButton from "../../atoms/button/LargeButton";
import { styleConst } from "../../../theme/root.style";

export default function BottomSheet({ isPress, onPress, children }) {
  return (
    <Modal transparent animationType="none" visible={isPress} onRequestClose={onPress}>
      <View style={{ flex: 1, backgroundColor: "rgba(52,52,52,0.5)" }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={()=>{onPress()}} />
        <View
          style={{
            padding: responsiveHeight(16),
            backgroundColor: styleConst.COLOR.LIGHT.LIGHT_100,
            borderTopRightRadius: responsiveWidth(30),
            borderTopLeftRadius: responsiveWidth(30),
            elevation: responsiveHeight(10),
           
          }}
        >
          {children}

          
        </View>
      </View>
    </Modal>
  );
}
