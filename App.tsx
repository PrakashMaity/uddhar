import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import Home from './pages/logical/Home.page';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
