import {onAuthStateChanged, updatePassword} from 'firebase/auth';
import {ref, update} from 'firebase/database';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILNullPhoto, IconRemovePhoto} from '../../asset';
import {Button, Gap, Header, Input} from '../../component';
import {auth, db} from '../../config/Fire';
import {getData, showError, storeData} from '../../utils';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

export default function EditProfile({name, desc, navigation}) {
  const [profile, setProfile] = useState({
    username: '',
    profession: '',
    email: '',
    photo: ILNullPhoto,
  });

  const [photo, setPhoto] = useState(ILNullPhoto);

  const [photoForDB, setPhotoForDB] = useState('');

  const [password, setPassword] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      // data.photo = res.photo ? {uri: res.photo} : ILNullPhoto;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  //Fungsi Ganti Image Photo Profile
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 400,
      maxWidth: 400,
      quality: 0.5,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        console.log('response image succsess: ', response);
        setPhotoForDB(
          `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
        );
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setPhoto({uri: imageUri});
      }
    });
  };

  //ini fungsi untuk update ke database
  const saveProfile = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password kurang dari 6 karakter');
      } else {
        //update password
        updatePasswordBaru();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      //update data ke firebase
      updateProfileData();
      navigation.replace('MainApp');
    }
  };

  //fungsi untuk update password
  const updatePasswordBaru = () => {
    // const auth = getAuth();
    // const user = auth.currentUser;
    // updatePassword(user, password)
    //   .then(() => {
    //     console.log('update password succsess!');
    //   })
    //   .catch(error => {
    //     console.log('update password gagal: ', error);
    //   });
    onAuthStateChanged(auth, user => {
      if (user) {
        updatePassword(user, password);
        // console.log('user mengganti passwor: ', user);
        // console.log('new password: ', password);
      }
    });
  };

  //fungsi update data ke firebase da lokal storage
  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;
    const userRef = ref(db, `users/${profile.uid}/`);
    update(userRef, data)
      .then(() => {
        storeData('user', data);
      })
      .catch(error => {
        showError(error.message);
      });
  };

  //fungsi ganti text input
  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  return (
    <View style={styles.page}>
      <Header title={'Edit Profile'} onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.profile}>
            <TouchableOpacity
              style={styles.borderava}
              onPress={openImagePicker}>
              <Image source={photo} style={styles.avatar} />
              <IconRemovePhoto style={styles.addphoto} />
            </TouchableOpacity>

            {name && (
              <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.profession}>{desc}</Text>
              </View>
            )}
          </View>
          <Gap height={10} />
          <Input
            label={'Full Name'}
            value={profile.username}
            onChangeText={value => changeText('username', value)}
          />
          <Gap height={18} />
          <Input
            label={'Profession'}
            value={profile.profession}
            onChangeText={value => changeText('profession', value)}
          />
          <Gap height={18} />
          <Input label={'Email'} value={profile.email} disable={true} />
          <Gap height={18} />
          <Input
            label={'Password'}
            value={password}
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
          />
          <Gap height={40} />
          <Button title={'Save Profile'} onPress={saveProfile} />
          <Gap height={30} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {
    paddingBottom: 10,
    flex: 1,
    padding: 40,
    paddingTop: 0,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  avatar: {width: 100, height: 100, borderRadius: 100 / 2},
  borderava: {
    width: 110,
    height: 110,
    backgroundColor: colors.border,
    borderRadius: 110 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addphoto: {position: 'absolute', bottom: 2, right: 2},
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
  },
  profession: {
    fontFamily: fonts.primary.normal,
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
});
