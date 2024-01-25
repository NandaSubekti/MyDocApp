import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor6,
  IconStar,
} from '../../../asset';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

export default function RatedDoctor({name, profession, onPress}) {
  const Profile = () => {
    if (name === 'Alexa Rachel' && profession === 'Dokter Anak') {
      return <Image source={DummyDoctor1} style={styles.avatar} />;
    }
    if (name === 'Sunny Frank' && profession === 'Dokter Gigi') {
      return <Image source={DummyDoctor2} style={styles.avatar} />;
    }
    if (name === 'Poe Minn' && profession === 'Dokter Bedah') {
      return <Image source={DummyDoctor3} style={styles.avatar} />;
    }
    return <Image source={DummyDoctor3} style={styles.avatar} />;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Profile />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{profession}</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  name: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 16,
  },
  category: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginTop: 2,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center',
  },
  rate: {flexDirection: 'row'},
  profile: {flex: 1},
});
