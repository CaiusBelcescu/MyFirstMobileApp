import React, { Component } from 'react';
import { View, Text , StyleSheet, Button} from 'react-native';

const CustomButton = ({onPress, text, type,textColour}) => {
    return (
    <View style={styles[type]}>
      <Button
        title={text}
        color={textColour}
        style={styles.button}
        onPress={onPress}
      />
    </View>
      
    );
};

const styles = StyleSheet.create({
    container_Primary: {
      backgroundColor: '#A681F3',
      borderRadius: 10,
      paddingTop: 3,
      paddingBottom: 3,
      marginBottom: 10,
    },
    container_forgot:{
        
    },
    button: {
      textDecorationColor: 'white',
    },
    button_container: {
        backgroundColor: '#A681F3',
        borderRadius: 10,
        paddingTop: 3,
        paddingBottom: 3,
        marginBottom: 10,
        width: '50%',
        top: 280,
      },
      button_container2: {
        backgroundColor: '#A681F3',
        borderRadius: 10,
        paddingTop: 3,
        paddingBottom: 3,
        marginBottom: 10,
        width: '50%',
        top: 40,
      },
  });

export default CustomButton;
