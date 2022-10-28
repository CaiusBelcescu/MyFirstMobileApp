import * as React from 'react';
import Home from './src/screens/Home';
import LogInPage from './src/screens/LogInPage/LogInPage';
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './src/navigation/app.navigator';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <LogInPage/>
      </View>
    </NavigationContainer>
  );
};

export default App;
