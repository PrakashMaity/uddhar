import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styleConst } from '../../../style/root.style'
import { responsiveHeight, responsiveWidth } from '../../../utils/ResponsiveUI'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
// npm i --save-dev @types/react-native-vector-icons
interface ButtonInterface{
  title?: string;
  plusIcon?: boolean;
  style?: object;
  onPress?:() =>void;
  buttonColor?: string;
  buttonTextColor?: string;
}

export default function LargeButton({ title, plusIcon, style, onPress, buttonColor, buttonTextColor }:ButtonInterface) {
  const styles = StyleSheet.create({
    customButton: {
      backgroundColor: buttonColor == undefined ? styleConst.COLOR.VIOLET.VIOLET_100 : buttonColor,
      width: "100%",
      height: responsiveHeight(60),
      borderRadius: responsiveHeight(14),
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText: {
      fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
      fontSize: responsiveHeight(18),
      color: buttonTextColor == undefined ? styleConst.COLOR.LIGHT.LIGHT_80 : buttonTextColor
    },
    plusBox: {
      height: responsiveHeight(22),
      width: responsiveHeight(22),
      borderWidth: responsiveHeight(2.5),
      marginRight: responsiveHeight(6),
      borderColor: buttonTextColor == undefined ?styleConst.COLOR.LIGHT.LIGHT_80 : buttonTextColor,
      borderRadius: responsiveHeight(6),
      justifyContent: "center",
      alignItems: "center"
    }
  })
  return (
    <TouchableOpacity
      disabled={onPress ? false : true}
      onPress={onPress}
      style={[styles.customButton, style]}>
      {plusIcon &&
        <View style={styles.plusBox} >
          <FontAwesome5 name="plus" color={buttonTextColor == undefined ? styleConst.COLOR.LIGHT.LIGHT_80 : buttonTextColor} size={responsiveWidth(10)} />
        </View>}
      {title && <Text numberOfLines={1} style={styles.buttonText}>
        {title}
      </Text>}
    </TouchableOpacity>
  )
}