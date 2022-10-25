import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native';

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
  return (
    <View style={styles.container}>
      <Button title="Log In" color="white" style={styles.button} />
    </View>
  );
};

export default LogInButton;
