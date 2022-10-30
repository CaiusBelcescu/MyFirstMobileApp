import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import LogInPage from '../screens/LogInPage/LogInPage';
import SignInPage from '../screens/SignInPage/SignInPage';
import SignInPage2 from "../screens/SignInPage2/SignInPage2";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            // headerStyle: {
            //   backgroundColor: '#A681F3',
            // },
            headerTintColor: '#fff',
            headerTransparent: true,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogInPage}
          options={{
            title: '',
            // headerStyle: {
            //   backgroundColor: '#A681F3',
            // },
            headerTintColor: '#fff',
            headerTransparent: true,
            headerBackTitle: 'Back',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInPage}
          options={{
            title: '',
            // headerStyle: {
            //   backgroundColor: '#A681F3',
            // },
            headerTintColor: '#fff',
            headerTransparent: true,
            headerBackTitle: 'Back',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="SignIn2"
          component={SignInPage2}
          options={{
            title: '',
            // headerStyle: {
            //   backgroundColor: '#A681F3',
            // },
            headerTintColor: '#fff',
            headerTransparent: true,
            headerBackTitle: 'Back',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
