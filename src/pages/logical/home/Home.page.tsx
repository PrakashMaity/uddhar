import { StyleSheet, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../../../style/global.style'
import SimpleHeader from '../../../components/atoms/header/SimpleHeader';
import LargeButton from '../../../components/atoms/button/LargeButton';
import SmallButton from '../../../components/atoms/button/SmallButton';

const Home = () => {
  return (
    <View style={globalStyle.mainContainer}>
      <SimpleHeader
        back
        threeDot
        title={"Header"}
      />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
})