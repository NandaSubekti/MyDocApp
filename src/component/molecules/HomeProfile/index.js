import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILNullPhoto} from '../../../asset';
import {getData} from '../../../utils';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

export default function HomeProfile({onPress}) {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    username: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = res.photo ? {uri: res.photo} : ILNullPhoto;
      // data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.continer} onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{profile.username}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 17,
    paddingHorizontal: 17,
    backgroundColor: colors.white,
    paddingTop: 30,
  },
  avatar: {width: 45, height: 45, borderRadius: 45 / 2, marginRight: 12},
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
