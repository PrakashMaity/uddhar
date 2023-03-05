import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-simple-toast';
import SimpleHeader from '../../../components/atoms/header/SimpleHeader';
export default function Login() {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")



  const onpressSubmit = async () => {
    try {
      let EmailVerify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      let isemailValid = EmailVerify.test(email)
      if (email == "") {
        Toast.show("Enter Email", Toast.LONG)
      } else {
        if (!isemailValid) {
          Toast.show("Enter valid email id", Toast.LONG)
        } else {
          if (password == "") {
            Toast.show("Enter password", Toast.LONG)
          } else {
            console.log(email, "  ", isemailValid)
            console.log(password)
            navigation.navigate("Home")
          }
        }
      }
    } catch (error) {
      console.log("onpressSubmit", error)
    }
  }

  return (
    <View style={{ flex: 1 }} >
<SimpleHeader
back
title='Login'
/>
      <View style={{ height: 50, width: "80%", alignSelf: "center", backgroundColor: "#f8f8f8", borderColor: "grey", borderWidth: 1, marginTop: 20 }} >
        <TextInput
          value={email}
          placeholder='Email'
          keyboardType="email-address"
          onChangeText={(e) => setEmail(e)}
        />
      </View>
      <View style={{ height: 50, width: "80%", alignSelf: "center", backgroundColor: "#f8f8f8", borderColor: "grey", borderWidth: 1, marginTop: 20 }} >
        <TextInput
          value={password}
          placeholder='Password'
          onChangeText={(e) => setPassWord(e)}
        />
      </View>
      <Pressable onPress={onpressSubmit} style={{ height: 50, width: "80%", alignSelf: "center", backgroundColor: "steelblue", marginTop: 20, justifyContent: "center", alignItems: "center" }} >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }} >Login</Text>
      </Pressable >

      <Text onPress={() => navigation.navigate("Signup")} style={{ fontSize: 16, marginTop: 20, textAlign: "center", textDecorationLine: "underline" }} >Go to SignUp</Text>
    </View>
  )
}