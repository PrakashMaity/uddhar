import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styleConst } from '../../../style/root.style'
import { responsiveHeight, responsiveWidth } from '../../../utils/ResponsiveUI'
import { TouchableOpacity } from 'react-native';

interface button{
  title?: string;
  style?: object;
  onPress?:()=> void;
  buttonColor?: string;
  buttonTextColor?: string;
}

export default function SmallButton({ title, style, onPress, buttonColor, buttonTextColor }:button ) {
  const styles = StyleSheet.create({
    customButton: {
      backgroundColor: buttonColor == undefined ? styleConst.COLOR.VIOLET.VIOLET_100 : buttonColor,
      width: "50%",
      height: responsiveHeight(60),
      borderRadius: responsiveHeight(10),
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText: {
      fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD,
      fontSize: responsiveHeight(18),
      color: buttonTextColor == undefined ? styleConst.COLOR.LIGHT.LIGHT_80 : buttonTextColor
    }
  })
  return (
    <TouchableOpacity
      disabled={onPress ? false : true}
      onPress={onPress}
      style={[styles.customButton, style]}>
      {title && <Text numberOfLines={1} style={styles.buttonText}>
        {title}
      </Text>}
    </TouchableOpacity>
  )
}