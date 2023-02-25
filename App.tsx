import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import StackNavigation from './navigation/stack-navigator/StackNavigation';
import { styleConst } from './style/root.style';

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} backgroundColor={styleConst.COLOR.VIOLET.VIOLET_100}/>
      <StackNavigation />
    </NativeBaseProvider>
  );
};

export default App;
