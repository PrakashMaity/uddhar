import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { styleConst } from '../../style/root.style'
import { Button, Icon, Input } from 'native-base'
import CustomButton from '../../components/atoms/button/Button'
import { Pressable } from 'react-native'
import { responsiveWidth } from '../../utils/ResponsiveUI'
import { globalStyle } from '../../style/global.style'

const Home = () => {
  const [show, setShow] = React.useState(false);

  return (
    <View style={globalStyle.mainContainer}>
     <CustomButton />
     <TextInput
     style={{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }}
        onChangeText={()=>{}}
      />
     <Input  variant="rounded" type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            {/* <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" /> */}
            <Text>{show ? "visibility" : "visibility-off"}</Text>
          </Pressable>} placeholder="Password" />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  main:{
    flex:1,
    // justifyContent:'center',
    alignItems:'center',
  }
})