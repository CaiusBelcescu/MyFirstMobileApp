import React,{useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import logoImage from '../../../assets/images/logoCloudLove.png';
import loginImage from '../../../assets/images/startUpPage.png';
import LogInButton from '../../components/LogInButton/LogInButton';
import {withNavigation} from 'react-navigation';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const logoImageUri = Image.resolveAssetSource(logoImage).uri;
const loginImageUri = Image.resolveAssetSource(loginImage).uri;

const EmailConfirm = () => {

  const navigation=useNavigation();
  const[code,setCode] = useState('');
  const onRegister = () =>{
    navigation.navigate('Home');
  };
  const onResendCode= () =>{
    //navigation.navigate('Home');
  };
  const onBackLogIn = () =>{
    navigation.navigate('LogIn');
  };

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
      <View>
        <View style={styles.first_input_container}>
          <Text style={styles.text}>Email confirmation code:</Text>
          <CustomInput placeholder="Code..." value={code} setValue={setCode} secureTextEntry={false} />
        </View>
      </View>
      <View style={styles.button_container}>
        
        <CustomButton text={'Register'} onPress={onRegister} type="container_Primary" textColour="white"/>
        <CustomButton text={'Resend Code'} onPress={onResendCode} type="container_forgot" textColour="gray"/>
        <CustomButton text={'Back to Log In'} onPress={onBackLogIn} type="container_forgot" textColour="gray"/>
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
    top: 70,
  },
  container_top: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    backgroundColor: '#E799B6',
    //position: 'absolute',
  },
  text: {
    marginTop: 100,
    marginLeft: 0,
    paddingRight: 200,
    alignItems: 'flex-start',
  },
  yourInput: {
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 5,
  },
  button_container: {
    width: '50%',
    marginTop: 100,
  },
  first_input_container: {
    marginBottom: 20,
  },
  second_input_container: {
    marginTop: 20,
  },
});
export default EmailConfirm;
