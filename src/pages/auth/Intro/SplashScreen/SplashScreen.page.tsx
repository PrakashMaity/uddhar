import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styleConst } from '../../../../style/root.style'
import { responsiveHeight, responsiveWidth } from '../../../../utils/ResponsiveUI'
import { Image } from 'react-native'
import { images } from '../../../../constant/images.contant'
import { useNavigation } from '@react-navigation/native'
export default function SplashScreen() {
  const navigation:any = useNavigation()
  const greet = () => {
    navigation.replace("IntroScreen")
  }
  useEffect(() => {
    setTimeout(greet, 1500);
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100 }}>
      <View style={{ height: responsiveHeight(85), width: responsiveHeight(85), position: "absolute", top: responsiveHeight(374), left: responsiveWidth(118) }} >
        <Image source={images.SplashScreen.dot} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
      </View>
      <Text style={{ marginTop: responsiveHeight(372), marginLeft: responsiveWidth(89), fontSize: responsiveHeight(53), fontFamily: styleConst.FONT_FAMILY.INTER_BOLD, color: styleConst.COLOR.LIGHT.LIGHT_100, lineHeight: responsiveHeight(67.77) }} >uddhar</Text>
    </View>
  )
}