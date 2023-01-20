import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../../models';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState();
  const [lookingFor, setLookingFor] = useState();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();

        const dbUsers = await DataStore.query(
          User,
          u => u.sub === user.attributes.sub,
        );
        if (dbUsers.length < 0) {
          return;
        }
        const dbUser = dbUsers[0];
        setUser(dbUser);

        setName(dbUser.name);
        setBio(dbUser.bio);
        setGender(dbUser.gender);
        setLookingFor(dbUser.lookingFor);
      } catch (error) {
        Alert.warn('Error12');
      }
    };
    getCurrentUser();
  }, []);

  const isValid = () => {
    return name && bio && gender && lookingFor;
  };
  const updateUser = async () => {
    try {
      const updatedUser = User.copyOf(user, updated => {
        updated.name = name;
        updated.bio = bio;
        updated.gender = gender;
        updated.lookingFor = lookingFor;
      });

      await DataStore.save(updatedUser);
    } catch (error) {
      console.log(error);
      Alert.warn('failed uppdate');
    }
  };

  const createUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser();

      const newUser = new User({
        sub: authUser.attributes.sub,
        name,
        bio,
        gender,
        lookingFor,
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
      });
      console.log('Here');
      await DataStore.save(newUser);
      //console.log('Here');
    } catch (error) {
      Alert.warn('failed create');
    }
  };

  const save = async () => {
    try {
      if (user) {
        await updateUser();
      } else {
        await createUser();
      }
      Alert.warn('User saved successfully');
    } catch (error) {
      console.log(error);
      Alert.warn('Failed to save user, please try again');
    }
  };
  // if (user) {
  //   const updatedUser = User.copyOf(user, updated => {
  //     updated.name = name;
  //     updated.bio = bio;
  //     updated.gender = gender;
  //     updated.lookingFor = lookingFor;
  //   });

  //   await DataStore.save(updatedUser);
  // } else {
  //   // create a new user
  //   const authUser = await Auth.currentAuthenticatedUser();

  //   const newUser = new User({
  //     sub: authUser.attributes.sub,
  //     name,
  //     bio,
  //     gender,
  //     lookingFor,
  //     image:
  //       'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
  //   });
  //   await DataStore.save(newUser);
  // }

  //Alert.warn('User saved successfully');
  // };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name..."
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="bio..."
          multiline
          numberOfLines={3}
          value={bio}
          onChangeText={setBio}
        />

        <Text>Gender</Text>
        <Picker
          label="Gender"
          selectedValue={gender}
          onValueChange={itemValue => setGender(itemValue)}>
          <Picker.Item label="Male" value="MALE" />
          <Picker.Item label="Female" value="FEMALE" />
          <Picker.Item label="Other" value="OTHER" />
        </Picker>

        <Text>Looking for</Text>
        <Picker
          label="Looking for"
          selectedValue={lookingFor}
          onValueChange={itemValue => setLookingFor(itemValue)}>
          <Picker.Item label="Male" value="MALE" />
          <Picker.Item label="Female" value="FEMALE" />
          <Picker.Item label="Other" value="OTHER" />
        </Picker>

        <Pressable onPress={save} style={styles.button}>
          <Text>Save</Text>
        </Pressable>

        <Pressable onPress={() => Auth.signOut()} style={styles.button}>
          <Text>Sign out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  button: {
    backgroundColor: '#F63A6E',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
  },
  input: {
    margin: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
});

export default Profile;
