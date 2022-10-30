import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import logoImage from '../../../assets/images/logoCloudLove.png';
import loginImage from '../../../assets/images/startUpPage.png';
import LogInButton from '../../components/LogInButton/LogInButton';
import SignUpButton from '../../components/SignUpButton/SignUpButton';

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
  login_image: {
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
    // <SafeAreaView>
    <View style={styles.container_buttons}>
      <Image
        source={{
          uri: loginImageUri,
        }}
        style={styles.login_image}
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
    // </SafeAreaView>
  );
};

const styles2 = StyleSheet.create({
  container: {
    backgroundColor: '#E799B6',
    width: '80%',
    top: 40,
  },
});

export default Home;
