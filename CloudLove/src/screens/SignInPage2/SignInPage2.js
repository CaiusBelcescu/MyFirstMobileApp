import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

function SignInPage2() {
  const navigation = useNavigation();
  const onCreatePress = () => {
    navigation.navigate('EmailConfirm');
  };
  const onTerms = () => {
    navigation.navigate('LogIn');
  };
  const onPrivacy = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.general_input_container}>
        <View style={styles.input_container}>
          <Text style={styles.text}>Country:</Text>
          <TextInput placeholder="Country..." style={styles.yourInput} />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>City:</Text>
          <TextInput placeholder="City..." style={styles.yourInput} />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Interests:</Text>
          <TextInput placeholder="Interests..." style={styles.yourInput} />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Job:</Text>
          <TextInput placeholder="Job..." style={styles.yourInput} />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Quote:</Text>
          <TextInput placeholder="Quote..." style={styles.yourInput} />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Languages:</Text>
          <TextInput placeholder="Languages..." style={styles.yourInput} />
        </View>
      </View>
      <View style={styles.privacy_container}>
        <Text style={styles.text_bottom}>
          By registering, you confirm that you accept our {''}
          <Text style={styles.link} onPress={onTerms}>
            Terms of Use{' '}
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacy}>
            Privacy Policy
          </Text>
        </Text>
      </View>
      <CustomButton
        text={'Create'}
        onPress={onCreatePress}
        type="button_container2"
        textColour="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  privacy_container: {
    width: '80%',
    paddingTop: 10,
  },
  button_container: {
    backgroundColor: '#A681F3',
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 3,
    marginBottom: 10,
    width: '50%',
    top: 180,
  },
  text_bottom: {
    marginTop: 110,
  },
  link: {
    color: '#A681F9',
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
  title: {
    top: 100,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  input_container: {
    marginTop: 20,
  },
  general_input_container: {
    top: 100,
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

export default SignInPage2;
