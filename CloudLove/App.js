import * as React from 'react';
import Home from './src/screens/Home/Home';
import LogInPage from './src/screens/LogInPage/LogInPage';

import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigator from './src/navigation/StackNavigator';
import EmailConfirmationPage from './src/screens/EmailConfirmationPage/EmailConfirmationPage';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen';
import AfterLogIn from './src/screens/UserInterfaceAfterLogingIn/AfterLogIn';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react-native';

Amplify.configure(config);

const App = () => {
  return (
    <NavigationContainer style={{flex: 1}}>
      <StackNavigator />
    </NavigationContainer>
    // <View>
    //   <AfterLogIn />
    // </View>
  );
};

export default withAuthenticator(App);
