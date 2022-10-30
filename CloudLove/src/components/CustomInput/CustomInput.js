import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet} from 'react-native';

const CustomInput =({value,setValue,placeholder,secureTextEntry}) =>{
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 5,
  },
  input:{

  }
});
export default CustomInput;