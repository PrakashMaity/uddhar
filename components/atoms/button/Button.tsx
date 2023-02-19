import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styleConst } from '../../../style/root.style'
import { Button } from 'native-base'
import { responsiveWidth } from '../../../utils/ResponsiveUI'

const CustomButton = () => {
  return (
    <Button style={styles.customButton} onPress={() => console.log("hello world")}>
      <Text style={styles.buttonText}>
        Signup
      </Text>
    </Button>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  customButton:{
    backgroundColor:styleConst.COLOR.VIOLET.VIOLET_100,
    // width:responsiveWidth(368),
    margin:20,
    height:56,
    borderRadius:15,
  },
  buttonText:{
    fontFamily:styleConst.FONT_FAMILY.INTER_SEMIBOLD,
    fontSize:14,
    color:styleConst.COLOR.LIGHT.LIGHT_100
  }
})