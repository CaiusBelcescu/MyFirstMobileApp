import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native';
import {NavigationActions as navigation} from 'react-navigation';
import {useNavigation} from "@react-navigation/native";

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
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Sign Up"
        color="white"
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default SignUpButton;
