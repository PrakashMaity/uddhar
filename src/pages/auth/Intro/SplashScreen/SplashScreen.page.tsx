import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { images } from '../../../../constant/images.contant'
import { useNavigation } from '@react-navigation/native'
import { styles } from './SplashScreen.style'
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
      <View style={styles.imageWrapper} >
        <Image source={images.SplashScreen.dot} style={styles.mainImages} />
      </View>
      <Text style={styles.mainTitle} >uddhar</Text>
    </View>
  )
}