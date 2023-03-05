import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { styleConst } from './src/style/root.style';
import StackNavigation from './src/navigation/stack-navigator/StackNavigation';
import './assets/i18n/i18n.config'
const App = () => {
  return (
    // <NativeBaseProvider>
    // <StatusBar barStyle={"light-content"} backgroundColor={styleConst.COLOR.VIOLET.VIOLET_100} />
    <StackNavigation />
    // <NativeBaseProvider />
  )
};
export default App;
