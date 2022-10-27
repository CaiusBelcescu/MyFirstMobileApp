import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native';
import LogInPage from '../../screens/LogInPage/LogInPage';
import { useNavigation } from '@react-navigation/native';



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A681F3',
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 3,
    marginBottom: 10,
  },
  button: {
    textDecorationColor: 'white',
  },
});

const LogInButton = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Button 
        onPress = {() =>
          {navigation.navigate('Home')}
        }
  
        title="Log In" 
        color="white" 
        style={styles.button} >
        </Button>
    </View>
  );
};

export default LogInButton;
