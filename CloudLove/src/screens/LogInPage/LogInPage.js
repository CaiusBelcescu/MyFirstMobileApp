import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import logoImage from '../../../assets/images/logoCloudLove.png';
const logoImageUri = Image.resolveAssetSource(logoImage).uri;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 50,
  },
  logo_container: {
    backgroundColor: '#E799B6',
  },
});

const LogInPage = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default LogInPage;
