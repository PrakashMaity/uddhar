import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from "../../pages/auth/Intro/SplashScreen/SplashScreen.page"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from '../../pages/auth/Intro/IntroScreen/IntroScreen.page';
import Login from '../../pages/auth/logIn/Login.page';
import Signup from '../../pages/auth/signUp/Signup.page';
import Home from '../../pages/logical/Home.page';
import RootStackParamListInterface from '../../interface/Navigation.interface'

const Stack = createNativeStackNavigator()

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}