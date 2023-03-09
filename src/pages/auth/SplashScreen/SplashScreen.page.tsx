import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { images } from '../../../constant/images.contant'
import { useNavigation } from '@react-navigation/native'
import { styles } from './SplashScreen.style'
import { styleConst } from '../../../style/root.style'
export default function SplashScreen() {
  const navigation:any = useNavigation()
  const greet = () => {
    navigation.replace("IntroScreen")
  }
  useEffect(() => {
    setTimeout(greet, 1500);
  }, [])

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={styleConst.COLOR.LIGHT.LIGHT_100} />
      <View style={styles.imageWrapper} >
        <Image source={images.SplashScreen.dot} style={styles.mainImages} />
      </View>
      <Text style={styles.mainTitle} >uddhar</Text>
    </View>
  )
}