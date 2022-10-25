import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A681F3',
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 3,
  },
  button: {
    fontWeight: '900',
    fontFamily: 'Arimo',
  },
});

const SignUpButton = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Sign Up"
        color="white"
        style={styles.button}
      />
    </View>
  );
};

export default SignUpButton;
