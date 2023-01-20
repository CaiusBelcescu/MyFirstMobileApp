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
import Matches from '../screens/Matches/Matches';
import AfterLogIn from '../screens/UserInterfaceAfterLogIn/AfterLogIn';
import InsightHome from '../screens/InsightHome/InsightHome';
import Swipe2 from '../screens/Swipe2/Swipe2';
import {useEffect} from 'react';
import {Auth} from 'aws-amplify';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {View} from 'react-native';
import {Hub} from 'aws-amplify';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const [user, setUser] = useState(undefined);
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (error) {
      setUser(null);
    }
  };
  useEffect(() => {
    checkUser();
  }, []);
  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View
        style={{
          flex: 1,
          justyfyContent: 'center',
          alignitems: 'center',
        }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Group>
        {user ? (
          <>
            <Stack.Screen
              name="InsightHome"
              component={InsightHome}
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
              name="Swipe2"
              component={Swipe2}
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
              name="AfterLogin"
              component={AfterLogIn}
              options={{
                title: '',
                headerTintColor: '#fff',
                headerTransparent: true,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Matches"
              component={Matches}
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
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: '',
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
          </>
        )}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
