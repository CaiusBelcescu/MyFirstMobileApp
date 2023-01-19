import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Card from '../../components/Card/Card';
import AnimatedStack from '../../components/AnimatedStack/AnimatedStack';
import users from '../../../assets/data/users';

const Swipe2 = () => {
  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
    console.log(user.id);
  };

  const onSwipeRight = user => {
    console.warn('swipe right: ', user.name);
    console.log(user.id);
  };
  useEffect(() => {}, []);
  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={users}
        renderItem={({item}) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});

export default Swipe2;
