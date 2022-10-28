import React from 'react';
import { View, StyleSheet, Image, Button, Text, ProgressViewIOSComponent } from "react-native";
import logoImage from '../../../assets/images/logoCloudLove.png';
import loginImage from '../../../assets/images/startUpPage.png';
import { NavigationActions as navigation } from "react-navigation";
import LogInButton from '../../components/LogInButton';
import SignUpButton from '../../components/SignUpButton';

const logoImageUri = Image.resolveAssetSource(logoImage).uri;
const loginImageUri = Image.resolveAssetSource(loginImage).uri;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 50,
  },
  login: {
    width: '100%',
    height: '70%',
  },
  container_buttons: {
    alignItems: 'center',
    backgroundColor: '#E799B6',
    height: '100%',
  },
});

const Home = () => {
  return (

    <View style={styles.container_buttons}>
      <Image
        source={{
          uri: loginImageUri,
        }}
        style={styles.login}
      />
      <Image
        source={{
          uri: logoImageUri,
        }}
        style={styles.logo}
      />
      <View style={styles.container}>
        <View style={styles2.container}>
          <LogInButton />
          <SignUpButton />
        </View>
      </View>
    </View>
  );
};

const styles2 = StyleSheet.create({
  container: {
    backgroundColor: '#E799B6',
    width: '80%',
  },
});

export default Home;
