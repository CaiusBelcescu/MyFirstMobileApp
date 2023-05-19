import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import 'core-js/full/symbol/async-iterator';

Amplify.configure(config);

const App = () => {
  //Auth.signOut();
  return (
    <NavigationContainer style={{flex: 1}}>
      <StackNavigator />
    </NavigationContainer>
    // <View>
    //   <AfterLogIn />
    // </View>
  );
};
//Commit
export default App;
