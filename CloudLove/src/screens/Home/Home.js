import React from 'react';
import { View, StyleSheet, Image, Button, Text, ProgressViewIOSComponent } from "react-native";
import ChooseOption from '../../components/ChooseOption';
import logoImage from '../../../assets/images/logoCloudLove.png';
import loginImage from '../../../assets/images/startUpPage.png';
import { NavigationActions as navigation } from "react-navigation";
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
        <ChooseOption />
      </View>
    </View>
  );
};

export default Home;
