import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import StackNavi from './navigation/stack-navigator/StackNavi';
import { styleConst } from './style/root.style';

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} backgroundColor={styleConst.COLOR.VIOLET.VIOLET_100}/>
      <StackNavi/>
    </NativeBaseProvider>
  );
};

export default App;
