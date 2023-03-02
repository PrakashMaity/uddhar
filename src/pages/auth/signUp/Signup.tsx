import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-simple-toast';
export default function Signup() {
  const navigation = useNavigation()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")

  const onpressSubmit = async () => {
    try {

      let EmailVerify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

      let isemailValid = EmailVerify.test(email)
      if (name == "" || name.trim().length == 0) {
        Toast.show("enter name", Toast.LONG)
      } else {
        if (email == "") {
          Toast.show("Enter Email", Toast.LONG)
        } else {
          if (!isemailValid) {
            Toast.show("Enter valid email id", Toast.LONG)
          } else {
            if (password == "") {
              Toast.show("Enter password", Toast.LONG)
            } else {
              if (password.length < 8) {
                Toast.show("Enter minimun 8 digits password", Toast.LONG)
              } else {
                console.log(name)
                console.log(email, "  ", isemailValid)
                console.log(password)
                navigation.navigate("Home")
              }
            }
          }
        }
      }
    } catch (error) {
      console.log("onpressSubmit", error)
    }
  }



  return (
    <View style={{ flex: 1 }} >

      <View style={{ height: 50, width: "80%", alignSelf: "center", backgroundColor: "#f8f8f8", borderColor: "grey", borderWidth: 1, marginTop: 20 }} >
        <TextInput
          value={name}
          placeholder='Name'
          keyboardType="default"
          onChangeText={(e) => setName(e)}
        />
      </View>
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
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }} >SignUp</Text>
      </Pressable >

      <Text onPress={() => navigation.navigate("Login")} style={{ fontSize: 16, marginTop: 20, textAlign: "center", textDecorationLine: "underline" }} >Back to Login</Text>
    </View>
  )
}