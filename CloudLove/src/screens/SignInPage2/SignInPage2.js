import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

function SignInPage2() {

  const onCreatePress = () =>{
    () => navigation.navigate('LogIn')
  }

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
      <View style={styles.button_container}>
        <Button
          title="Next"
          color="white"
          style={styles.button}
          //onPress={() => navigation.navigate('SignIn2')}
        />
      </View>
      <CustomButton text={'Create'} onPress={onCreatePress} type="button_container2" />
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
    top: 180,
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
