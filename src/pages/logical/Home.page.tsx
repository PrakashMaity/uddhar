import { StyleSheet, View,Image } from 'react-native'
import React from 'react'
import { globalStyle } from '../../style/global.style'
import SimpleHeader from '../../components/atoms/header/SimpleHeader';
import LargeButton from '../../components/atoms/button/LargeButton';
import SmallButton from '../../components/atoms/button/SmallButton';
import LogoWithButton from '../../components/atoms/button/LogoWithButton';
import { styleConst } from '../../style/root.style';
import { responsiveWidth } from '../../utils/ResponsiveUI';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Home = () => {
  return (
    <View style={globalStyle.mainContainer}>
      <LargeButton
        onPress={() => console.log("pk")}
        title={"Sign Up"}
        plusIcon
      />
      <SmallButton
        onPress={() => console.log("pk")}
        title={"Sign Up"}
      />
      <SimpleHeader
        back
        threeDot
        title={"Header"}
      />
       <LogoWithButton
        onPress={() => console.log("pk")}
        title={"Sign Up"}
        Icon={()=>{
          return(
            <View>
            {/* <Image source={} style={{}}/> */}
            </View>
            // <FontAwesome5 name="plus" color={styleConst.COLOR.LIGHT.LIGHT_80} size={responsiveWidth(10)} />
          )
        }}
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