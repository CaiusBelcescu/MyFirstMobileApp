import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import LogInPage from './screens/LogInPage/LogInPage';
import LogInButton from './components/LogInButton';

const {Navigator, Screen} =  createNativeStackNavigator();

const AppNavigator = () =>(
    <NavigationContainer>
        <Navigator headerMode="none" initialRouteName="login">
            <Screen name="Login" component={ LogInPage }></Screen>
            <Screen name="Home" component={ Home }></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;