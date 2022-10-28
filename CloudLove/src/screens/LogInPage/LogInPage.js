import React from 'react';
import {View, Text, StyleSheet, Image,TextInput} from 'react-native';
import logoImage from '../../../assets/images/logoCloudLove.png';
import loginImage from '../../../assets/images/startUpPage.png';
import LogInButton from '../../components/LogInButton';

const logoImageUri = Image.resolveAssetSource(logoImage).uri;
const loginImageUri = Image.resolveAssetSource(loginImage).uri;

const LogInPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_top}>
      <Image
        source={{
          uri: logoImageUri,
        }}
        style={styles.logo}
      />
      </View>
      <View >
        <Text style={styles.text}>Username</Text>
        <TextInput placeholder='Username'style={styles.textin}/>
        <Text>Password</Text>
        <TextInput placeholder='Password' style={styles.textin}/>
        <LogInButton style={styles.button}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#F7F8FC',
  },
  container_bottom: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#F7F8FC',
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 50,
  },
  container_top: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    backgroundColor: '#E799B6',
    //position: 'absolute',

  },
  text:{
    marginTop: 100,
    marginLeft: 0,
    paddingRight: 200,
    alignItems: 'flex-start',
  },
  textin:{
   
    backgroundColor: '#CDD0F3',
    borderRadius: 5,
  },
  button:{
    paddingTop: 100,
  }
});
const styles2 = StyleSheet.create({
  container: {
    backgroundColor: '#E799B6',
    width: '80%',
  },
});

export default LogInPage;
