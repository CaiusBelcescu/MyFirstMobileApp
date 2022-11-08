import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import logoImage from '../../../assets/images/logoCloudLove.png';
import loginImage from '../../../assets/images/startUpPage.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const logoImageUri = Image.resolveAssetSource(logoImage).uri;
const loginImageUri = Image.resolveAssetSource(loginImage).uri;

const Home = () => {
  const navigation = useNavigation();
  const onSignInPress = () =>{
    navigation.navigate('SignIn');
  };
  const onLogInPress = () =>{
    navigation.navigate('LogIn');
  };

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
          <CustomButton text={'Log In'} onPress={onLogInPress} type="container_Primary" textColour="white"/>
          <CustomButton text={'Sign In'} onPress={onSignInPress} type="container_Primary" textColour="white"/>
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
  containerButton: {
    backgroundColor: '#A681F3',
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 3,
    marginBottom: 10,
  },
  buttonText: {
    textDecorationColor: 'white',
  },
});

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
  containerButton: {
    backgroundColor: '#A681F3',
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 3,
    marginBottom: 10,
  },
  buttonText: {
    textDecorationColor: 'white',
  },
});
export default Home;
