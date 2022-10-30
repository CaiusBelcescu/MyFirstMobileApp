import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import femaleGender from '../../../assets/images/female-gender.png';
import maleGender from '../../../assets/images/male-gender.png';
import {NavigationActions as navigation} from "react-navigation";
import {useNavigation} from "@react-navigation/native";

const femaleGenderUri = Image.resolveAssetSource(femaleGender).uri;
const maleGenderUri = Image.resolveAssetSource(maleGender).uri;

function SignInPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.general_input_container}>
        <View style={styles.input_container}>
          <Text style={styles.text}>Username:</Text>
          <TextInput placeholder="Username..." style={styles.yourInput} />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Email:</Text>
          <TextInput placeholder="Email..." style={styles.yourInput} />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Password:</Text>
          <TextInput placeholder="Password..." style={styles.yourInput} />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.text}>Confirm Password:</Text>
          <TextInput placeholder="Password..." style={styles.yourInput} />
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
      <View style={styles.button_container}>
        <Button
          title="Next"
          color="white"
          style={styles.button}
          onPress={() => navigation.navigate('SignIn2')}
        />
      </View>
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
    width: 100,
    height: 100,
    position: 'absolute',
    top: 50,
  },
  female_icon: {
    width: 100,
    height: 100,
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
    marginTop: 20,
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
