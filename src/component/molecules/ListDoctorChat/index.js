import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DummyDoctor1,
  DummyDoctor10,
  DummyDoctor11,
  DummyDoctor12,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
  DummyDoctor9,
} from '../../../asset';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

export default function ListDoctorChat({name, profession, pesan, onPress}) {
  const Profile = () => {
    if (name === 'Alexa Rachel') {
      return <Image source={DummyDoctor1} style={styles.avatar} />;
    }
    if (name === 'Sunny Frank') {
      return <Image source={DummyDoctor2} style={styles.avatar} />;
    }
    if (name === 'Poe Minn') {
      return <Image source={DummyDoctor3} style={styles.avatar} />;
    }
    if (name === 'Sidat sing') {
      return <Image source={DummyDoctor6} style={styles.avatar} />;
    }
    if (name === 'Mincika Itadori') {
      return <Image source={DummyDoctor7} style={styles.avatar} />;
    }
    if (name === 'Michel Milo') {
      return <Image source={DummyDoctor4} style={styles.avatar} />;
    }
    if (name === 'Kurnia Dwi Fara') {
      return <Image source={DummyDoctor5} style={styles.avatar} />;
    }
    if (name === 'Shasa Liversky') {
      return <Image source={DummyDoctor8} style={styles.avatar} />;
    }
    if (name === 'Chie Lian Lee') {
      return <Image source={DummyDoctor9} style={styles.avatar} />;
    }
    if (name === 'Jhonny Sins') {
      return <Image source={DummyDoctor10} style={styles.avatar} />;
    }
    if (name === 'Lina Yeager') {
      return <Image source={DummyDoctor12} style={styles.avatar} />;
    }
    if (name === 'Rosi Lionheart') {
      return <Image source={DummyDoctor11} style={styles.avatar} />;
    }
    return <Image source={DummyDoctor3} style={styles.avatar} />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.continer}>
        <Profile />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.chat}>{pesan}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 15},
  continer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  chat: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
