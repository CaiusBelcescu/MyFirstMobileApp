import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
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

const LogInPage = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onLogInPress = async data => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      await Auth.signIn(data.username, data.password);
      navigation.navigate('AfterLogin');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
    setLoading(false);
    //validate
    //navigation.navigate('AfterLogin');
  };
  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
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
      <View style={styles.general_input_container}>
        <View style={styles.first_input_container}>
          <Text style={styles.username_text}>Username:</Text>
          <CustomInput
            name="username"
            control={control}
            placeholder="Username..."
            secureTextEntry={false}
            rules={{
              required: 'Require username',
              //minLength: {value: 7, message: 'Passwprd min 7'},
            }}
          />
        </View>
        <View style={styles.second_input_container}>
          <Text style={styles.password_text}>Password:</Text>
          <CustomInput
            name="password"
            control={control}
            placeholder="Password..."
            secureTextEntry={true}
            rules={{
              required: 'Require password',
              minLength: {value: 7, message: 'Passwprd min 7'},
            }}
          />
        </View>
        <CustomButton
          text={'Forgot password?'}
          onPress={onForgotPassword}
          type="container_forgot"
        />
      </View>
      <View style={styles.button_container}>
        <CustomButton
          text={loading ? 'Loading...' : 'Login'}
          onPress={handleSubmit(onLogInPress)}
          type="container_Primary"
          textColour="white"
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
  general_input_container: {
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
  username_text: {
    marginTop: 100,
    fontSize: 20,
  },
  password_text: {
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
export default LogInPage;
