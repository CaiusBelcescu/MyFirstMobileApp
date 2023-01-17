import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import femaleGender from '../../../assets/images/female-gender.png';
import maleGender from '../../../assets/images/male-gender.png';
import {NavigationActions as navigation} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const femaleGenderUri = Image.resolveAssetSource(femaleGender).uri;
const maleGenderUri = Image.resolveAssetSource(maleGender).uri;

function SignInPage() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onNextPress = async data => {
    if (loading) {
      return;
    }
    setLoading(true);
    const {username, password, email, name} = data;
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {email, name},
      });

      navigation.navigate('EmailConfirm');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.general_input_container}>
        <View style={styles.input_container}>
          <Text style={styles.text}>Username:</Text>
          <CustomInput
            name="username"
            control={control}
            placeholder="Username..."
            secureTextEntry={false}
            rules={{
              required: 'Require username',
              //minLength: {value: 7, message: 'Password min 7'},
            }}
          />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Name:</Text>
          <CustomInput
            name="name"
            control={control}
            placeholder="Name..."
            secureTextEntry={false}
            rules={{
              required: 'Require email',
              //minLength: {value: 7, message: 'Password min 7'},
            }}
          />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Email:</Text>
          <CustomInput
            name="email"
            control={control}
            placeholder="Email..."
            secureTextEntry={false}
            rules={{
              required: 'Require email',
              //minLength: {value: 7, message: 'Password min 7'},
            }}
          />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Password:</Text>
          <CustomInput
            name="password"
            control={control}
            placeholder="Password..."
            secureTextEntry={true}
            rules={{
              required: 'Require password',
              minLength: {value: 7, message: 'Password min 7'},
            }}
          />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Confirm Password:</Text>
          <CustomInput
            name="confirmPass"
            control={control}
            placeholder="Confirm password..."
            secureTextEntry={true}
            rules={{
              required: 'Password',
              //minLength: {value: 7, message: 'Password min 7'},
            }}
          />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Choose Option:</Text>
          <Image
            source={{
              uri: maleGenderUri,
            }}
            style={styles.male_icon}
          />
          <Image
            source={{
              uri: femaleGenderUri,
            }}
            style={styles.female_icon}
          />
        </View>
      </View>
      <CustomButton
        text={loading ? 'Loading...' : 'Next'}
        onPress={handleSubmit(onNextPress)}
        type="button_container"
        textColour="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: '#A681F3',
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 3,
    marginBottom: 10,
    width: '50%',
    top: 280,
  },
  button: {
    textDecorationColor: 'white',
  },
  container: {
    backgroundColor: '#E799B6',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  male_icon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 50,
  },
  female_icon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 50,
    marginLeft: 200,
  },
  title: {
    top: 100,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  input_container: {
    marginTop: 1,
  },
  general_input_container: {
    top: 130,
    width: '80%',
  },
  yourInput: {
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 5,
  },
  text: {
    marginLeft: 0,
    alignItems: 'flex-start',
    color: 'white',
    fontSize: 20,
  },
});

export default SignInPage;
