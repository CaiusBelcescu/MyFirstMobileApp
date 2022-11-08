import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import profileImage from '../../../assets/images/woman.png';
import profileImage2 from '../../../assets/images/woman2.png';
const profileImageUri = Image.resolveAssetSource(profileImage).uri;
const profileImage2Uri = Image.resolveAssetSource(profileImage2).uri;

const images = [profileImageUri, profileImage2Uri];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ProfilePicturesSlider = () => {
  const [imgActive, setimgActive] = useState(0);

  // eslint-disable-next-line no-undef
  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}>
        {images.map((e, index) => (
          <Image key={e} style={styles.wrap} source={{uri: e}} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.3,
  },
});

export default ProfilePicturesSlider;
