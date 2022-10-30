import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LogInButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Log In"
        color="white"
        style={styles.button}
        onPress={() => navigation.navigate('LogIn')}
      />
    </View>
  );
};
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

export default LogInButton;
