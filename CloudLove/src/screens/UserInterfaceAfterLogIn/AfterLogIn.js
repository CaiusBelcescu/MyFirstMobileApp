import React from 'react';
import {Image, View, StyleSheet, Text, StatusBar} from 'react-native';
import profileImage from '../../../assets/images/woman.png';
import previousImage from '../../../assets/images/nextLeft.png';
import ProfilePicturesSlider from '../../components/ProfilePicturesSlider/ProfilePicturesSlider';
import {Auth} from 'aws-amplify';
const profileImageUri = Image.resolveAssetSource(profileImage).uri;
const previousIconUri = Image.resolveAssetSource(previousImage).uri;

const styles = StyleSheet.create({
  profile_image: {
    position: 'absolute',
    height: '40%',
    width: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#F7F8FC',
  },
  next_left_icon: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: -140,
    right: 100,
  },
  verified_icon: {
    position: 'absolute',
    width: 70,
    height: 70,
    top: -150,
    right: 10,
  },
  denied_icon: {
    position: 'absolute',
    width: 70,
    height: 70,
    top: -150,
    left: 10,
  },
  next_right_icon: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: -140,
    left: 100,
  },
  choose_option_container: {
    alignItems: 'center',
    flex: 1,
  },
});

const AfterLogIn = () => {
  const signOut = () => {
    Auth.signOut();
  };
  return (
    <View>
      <View style={styles.container}>
        {/*<Image*/}
        {/*  source={require('../../../assets/images/woman.png')}*/}
        {/*  style={styles.profile_image}*/}
        {/*/>*/}
        {/*<Image*/}
        {/*  source={require('../../../assets/images/woman2.png')}*/}
        {/*  style={styles.profile_image}*/}
        {/*/>*/}
        <ProfilePicturesSlider />
        <View style={styles.choose_option_container}>
          <Image
            source={require('../../../assets/images/nextLeft.png')}
            style={styles.next_left_icon}
          />
          <Image
            source={require('../../../assets/images/verified.png')}
            style={styles.verified_icon}
          />
          <Image
            source={require('../../../assets/images/remove.png')}
            style={styles.denied_icon}
          />
          <Image
            source={require('../../../assets/images/nextRight.png')}
            style={styles.next_right_icon}
          />
        </View>
      </View>
      <Text
        onPress={signOut}
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: 20,
          fontSize: 20,
        }}>
        Sign out
      </Text>
    </View>
  );
};

export default AfterLogIn;
