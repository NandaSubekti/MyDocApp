import {ref, update} from 'firebase/database';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILNullPhoto, IconAddPhoto, IconRemovePhoto} from '../../asset';
import {Button, Gap, Header, Link} from '../../component';
import {db} from '../../config/Fire';
import {storeData} from '../../utils';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

export default function UploadPhoto({navigation, route}) {
  const {username, profession, uid} = route.params;

  const [hasPhoto, setHasPhoto] = useState(false);

  const [photo, setPhoto] = useState(ILNullPhoto);

  const [photoForDB, setPhotoForDB] = useState('');

  // const openImagePicker = () => {
  //   launchImageLibrary({}, response => {
  //     console.log(response);
  //     const source = {uri: response.assets[0].uri};
  //     setPhoto(source);
  //     setHasPhoto(true);
  //   });
  // };

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
        console.log('response image: ', response);
        setPhotoForDB(
          `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
        );
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setPhoto({uri: imageUri});
        setHasPhoto(true);
      }
    });
  };

  const uploadAndContinue = () => {
    //update data ke firebase
    const userRef = ref(db, 'users/' + uid);
    update(userRef, {photo: photoForDB});
    // simpan data ke lokal (menambahkan photo)
    const data = route.params;
    data.photo = photoForDB;
    storeData('user', data);
    // navigasi ke hal mainapp
    navigation.replace('MainApp');
    /*---------------------------*/
  };
  return (
    <View style={styles.page}>
      <Header title={'Upload Photo'} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.borderava} onPress={openImagePicker}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addphoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addphoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title={'Upload And Continue'}
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title={'Skip for now'}
            align={'center'}
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 40,
    paddingBottom: 89,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  page: {flex: 1, backgroundColor: colors.white},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  borderava: {
    width: 130,
    height: 130,
    borderWidth: 0.5,
    backgroundColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addphoto: {position: 'absolute', bottom: 8, right: 6},
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
