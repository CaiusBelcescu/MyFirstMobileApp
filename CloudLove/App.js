import * as React from 'react';
import Home from './src/screens/Home/Home';
import LogInPage from './src/screens/LogInPage/LogInPage';
import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigator from './src/navigation/StackNavigator';
import EmailConfirm from './src/screens/EmailConfirm/EmailConfirm'
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen';

const App = () => {
  return (
    <NavigationContainer style={{flex: 1}}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
