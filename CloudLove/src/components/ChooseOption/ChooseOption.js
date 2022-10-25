import React from 'react';
import {View, StyleSheet} from 'react-native';
import LogInButton from '../LogInButton';
import SignUpButton from '../SignUpButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E799B6',
    width: '80%',
  },
});

const ChooseOption = () => {
  return (
    <View style={styles.container}>
      <LogInButton />
      <SignUpButton />
    </View>
  );
};

export default ChooseOption;
