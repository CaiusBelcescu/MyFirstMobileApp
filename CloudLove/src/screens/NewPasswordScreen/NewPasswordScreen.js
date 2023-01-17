import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert} from 'react-native';
import logoImage from '../../../assets/images/logoCloudLove.png';
import loginImage from '../../../assets/images/startUpPage.png';
import {withNavigation} from 'react-navigation';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const logoImageUri = Image.resolveAssetSource(logoImage).uri;
const loginImageUri = Image.resolveAssetSource(loginImage).uri;

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  const onSubmit = async data => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.newPass);
      navigation.navigate('LogIn');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
  };
  const onBackLogIn = () => {
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
          <Text style={styles.text}>Username</Text>
          <CustomInput
            name="username"
            control={control}
            placeholder="username"
            secureTextEntry={false}
            rules={{
              required: 'Require username',
              //minLength: {value: 7, message: 'Password min 7'},
            }}
          />
        </View>
        <View style={styles.first_input_container}>
          <Text style={styles.text}>Email Code</Text>
          <CustomInput
            name="code"
            control={control}
            placeholder="code..."
            secureTextEntry={false}
            rules={{
              required: 'Require username',
              //minLength: {value: 7, message: 'Password min 7'},
            }}
          />
        </View>
        <View style={styles.second_input_container}>
          <Text style={styles.text}>New Password</Text>
          <CustomInput
            name="newPass"
            control={control}
            placeholder="New Password..."
            secureTextEntry={true}
            rules={{
              required: 'Require username',
              //minLength: {value: 7, message: 'Password min 7'},
            }}
          />
        </View>
      </View>
      <View style={styles.button_container}>
        <CustomButton
          text={'Submit'}
          onPress={handleSubmit(onSubmit)}
          type="container_Primary"
          textColour="white"
        />
        <CustomButton //this is a custom button
          text={'Back to Log In'}
          onPress={onBackLogIn}
          type="container_forgot"
          textColour="gray"
        />
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
    marginTop: 20,
  },
  first_input_container: {
    marginBottom: 0,
  },
  second_input_container: {
    marginTop: 0,
  },
});
export default NewPasswordScreen;
