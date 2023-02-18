import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Home />
      </View>
    </NavigationContainer>
  );
};

export default App;
