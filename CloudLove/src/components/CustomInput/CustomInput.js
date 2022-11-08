import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({control, name, rules, placeholder, secureTextEntry}) => {
  console.log('rules', rules);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#D9D9D9'},
            ]}>
            <TextInput
              placeholder={placeholder}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={styles.error_message_style}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 5,
  },
  input: {},
  error_message_style: {
    color: 'red',
    alignSelf: 'stretch',
    marginBottom: -15,
  },
});
export default CustomInput;
