import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import logoImage from '../../../assets/images/logoCloudLove.png';
import loginImage from '../../../assets/images/startUpPage.png';
import {withNavigation} from 'react-navigation';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const logoImageUri = Image.resolveAssetSource(logoImage).uri;
const loginImageUri = Image.resolveAssetSource(loginImage).uri;

const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const onSend = () => {
    navigation.navigate('NewPasswordScreen');
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
      <View style={styles.input_for_username}>
        <View style={styles.first_input_container}>
          <Text style={styles.text}>Write your username:</Text>
          <CustomInput
            name="confirmPass"
            control={control}
            placeholder="Username..."
            secureTextEntry={false}
            rules={{
              required: 'Require username',
              minLength: {value: 7, message: 'Password min 7'},
            }}
          />
        </View>
      </View>
      <View style={styles.button_container}>
        <CustomButton
          text={'Send'}
          onPress={handleSubmit(onSend)}
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
  input_for_username: {
    width: '70%',
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
    marginTop: 100,
  },
  first_input_container: {
    marginBottom: 20,
  },
  second_input_container: {
    marginTop: 20,
  },
});
export default ForgotPassword;
