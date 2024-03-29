import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert} from 'react-native';
import logoImage from '../../../assets/images/logoCloudLove.png';
import loginImage from '../../../assets/images/startUpPage.png';
import {withNavigation} from 'react-navigation';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {useRoute} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const logoImageUri = Image.resolveAssetSource(logoImage).uri;
const loginImageUri = Image.resolveAssetSource(loginImage).uri;

const EmailConfirmationPage = () => {
  const route = useRoute();
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {username: route?.params?.username},
  });

  const username = watch('username');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const onRegister = async data => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.confirmSignUp(data.username, data.code);
      Alert.alert('Check email');
      navigation.navigate('LogIn');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
    setLoading(false);
  };
  const onResendCode = async () => {
    try {
      await Auth.resendSignUp(username);
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
      <View style={styles.first_input_container}>
        <Text style={styles.text}>Username:</Text>
        <CustomInput
          placeholder="Username..."
          name="username"
          control={control}
          secureTextEntry={false}
          rules={{
            required: 'Password',
            //minLength: {value: 7, message: 'Passwprd min 7'},
          }}
        />
      </View>
      <View style={styles.first_input_container}>
        <Text style={styles.text}>Email confirmation code:</Text>
        <CustomInput
          placeholder="Code..."
          name="code"
          control={control}
          secureTextEntry={false}
          rules={{
            required: 'Password',
            //minLength: {value: 7, message: 'Passwprd min 7'},
          }}
        />
      </View>
      <View style={styles.button_container}>
        <CustomButton
          text={loading ? 'Loading...' : 'Register'}
          onPress={handleSubmit(onRegister)}
          type="container_Primary"
          textColour="white"
        />
        <CustomButton
          text={'Resend Code'}
          onPress={onResendCode}
          type="container_forgot"
          textColour="gray"
        />
        <CustomButton
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
    fontSize: 20,
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
    marginTop: 70,
  },
  first_input_container: {
    marginBottom: 20,
    width: '70%',
  },
  second_input_container: {
    marginTop: 20,
  },
});
export default EmailConfirmationPage;
