import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import LogInPage from '../screens/LogInPage/LogInPage';

const Stack =  createNativeStackNavigator();

const AppNavigator = () =>(
    <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="login">
            <Stack.Screen name="Login" component={ LogInPage }></Stack.Screen>
            <Stack.Screen name="Home" component={ Home }></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppNavigator;