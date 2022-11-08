import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import LogInPage from '../screens/LogInPage/LogInPage';
import SignInPage from '../screens/SignInPage/SignInPage';
import SignInPage2 from '../screens/SignInPage2/SignInPage2';
import EmailConfirmationPage from '../screens/EmailConfirmationPage/EmailConfirmationPage';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import SwipingScreen from '../screens/SwipingScreen/SwipingScreen';
import {Image} from 'react-native';
import previousImage from '../../assets/images/previous.png';

//const previousImageUri = Image.resolveAssetSource(previousImage).uri;
const Stack = createNativeStackNavigator();
// const MyCustomHeaderBackImage = () => (
//   <Image
//     source={{
//       uri: previousImageUri,
//     }}
//     style={{width: 22, height: 22}}
//   />
// );

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
          name="SwipingScreen"
          component={SwipingScreen}
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
          name="EmailConfirm"
          component={EmailConfirmationPage}
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
          name="ForgotPassword"
          component={ForgotPassword}
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
          name="NewPasswordScreen"
          component={NewPasswordScreen}
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
            //headerBackImageSource: MyCustomHeaderBackImage,
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
