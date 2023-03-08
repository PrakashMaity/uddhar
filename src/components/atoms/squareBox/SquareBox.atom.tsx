import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../../utils/ResponsiveUI'
import { styleConst } from '../../../style/root.style'
import { images } from '../../../constant/images.contant'
import Ionicons from 'react-native-vector-icons/Ionicons';

const SquareBox = () => {
  return (
    <View style={styles.box}>
     <Ionicons name="wallet" size={responsiveWidth(30)} color={styleConst.COLOR.VIOLET.VIOLET_100} />
    </View>
  )
}

export default SquareBox

const styles = StyleSheet.create({
    box:{
        width:responsiveHeight(52),
        height:responsiveWidth(52),
        borderRadius:responsiveWidth(16),
        backgroundColor:styleConst.COLOR.VIOLET.VIOLET_20,
        alignItems:'center',
        justifyContent:'center'
    }
})