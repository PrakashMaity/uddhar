import { StyleSheet, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/atoms/button/Button';
import { globalStyle } from '../../style/global.style'
import SmallButton from '../../components/atoms/smallButton/SmallButton';
import SimpleHeader from '../../components/atoms/header/SimpleHeader';

const Home = () => {
  return (
    <View style={globalStyle.mainContainer}>
      <CustomButton
        onPress={() => console.log("pk")}
        title={"Sign Up"}
        plusIcon
        style={{}}
      // buttonTextColor='black'
      // buttonColor={"rgba(0,0,0,0)"}
      />
      <SmallButton
        onPress={() => console.log("pk")}
        title={"Sign Up"}
        style={{}}
      // buttonTextColor='black'
      // buttonColor={"rgba(0,0,0,0)"}
      />
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
    // justifyContent:'center',
    // alignItems: 'center',
  }
})