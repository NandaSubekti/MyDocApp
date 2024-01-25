// DoctorComponent.js
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor6,
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor7,
  DummyDoctor8,
  DummyDoctor9,
  DummyDoctor10,
  DummyDoctor11,
  DummyDoctor12,
  DummyDoctor13,
  DummyDoctor14,
  DummyDoctor15,
  DummyDoctor16,
  DummyDoctor17,
  DummyDoctor18,
  DummyDoctor19,
  DummyDoctor20,
  DummyDoctor21,
  DummyDoctor22,
  DummyDoctor23,
  DummyDoctor24,
  DummyDoctor25,
  DummyDoctor26,
  DummyDoctor27,
} from '../../../asset'; // Sesuaikan dengan struktur proyek Anda

const DoctorComponent = ({doctorId, name, profession, navigation}) => {
  const handleBooking = () => {
    // Navigasi ke halaman booking dengan mengirimkan doctorId
    navigation.navigate('DoctorBooking', {doctorId});
  };
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
    if (name === 'Dolores') {
      return <Image source={DummyDoctor13} style={styles.avatar} />;
    }
    if (name === 'Yita Zuambu') {
      return <Image source={DummyDoctor14} style={styles.avatar} />;
    }
    if (name === 'Miguela') {
      return <Image source={DummyDoctor11} style={styles.avatar} />;
    }
    if (name === 'Rosi Lionheart') {
      return <Image source={DummyDoctor15} style={styles.avatar} />;
    }
    if (name === 'Osas') {
      return <Image source={DummyDoctor16} style={styles.avatar} />;
    }
    if (name === 'Giovani Zosgas') {
      return <Image source={DummyDoctor17} style={styles.avatar} />;
    }
    if (name === 'Melani Camplo') {
      return <Image source={DummyDoctor18} style={styles.avatar} />;
    }
    if (name === 'Jhonatan Riffle') {
      return <Image source={DummyDoctor19} style={styles.avatar} />;
    }
    if (name === 'Vangor Diego') {
      return <Image source={DummyDoctor20} style={styles.avatar} />;
    }
    if (name === 'Sastri Narawath') {
      return <Image source={DummyDoctor21} style={styles.avatar} />;
    }
    if (name === 'Gustavo') {
      return <Image source={DummyDoctor22} style={styles.avatar} />;
    }
    if (name === 'Liana Zuroch') {
      return <Image source={DummyDoctor23} style={styles.avatar} />;
    }
    if (name === 'Ricardo Misca') {
      return <Image source={DummyDoctor24} style={styles.avatar} />;
    }
    if (name === 'Nora Boastol') {
      return <Image source={DummyDoctor25} style={styles.avatar} />;
    }
    if (name === 'Chien Liou') {
      return <Image source={DummyDoctor26} style={styles.avatar} />;
    }
    if (name === 'Miara Kanal') {
      return <Image source={DummyDoctor27} style={styles.avatar} />;
    }
    return null;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleBooking}>
      <Profile />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    alignItems: 'center',
  },
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 15},
  name: {fontFamily: 'OpenSans-Regular', fontSize: 16, color: '#112340'},
  profession: {fontFamily: 'OpenSans-Light', fontSize: 12, color: '#7D8797'},
});

export default DoctorComponent;
