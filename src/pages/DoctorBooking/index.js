// BookingDoctor.js
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {DummyDoctor21, IconFemale, IconRemovePhoto} from '../../asset'; // Adjust based on your project structure
import {
  Button,
  DoctorCategoryList,
  Gap,
  Header,
  ProfileItem,
} from '../../component';
import {useEffect, useState} from 'react';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const DoctorBooking = ({route, name, profession, navigation}) => {
  const {doctorId} = route.params; // Retrieve doctorId from the route parameters

  // Fetch doctor information based on doctorId (You can use Redux, API call, or any other method)
  const doctorInfo = {
    id: doctorId,
    photo: DummyDoctor21,
    name: 'Nirawati',
    profession: 'Dokter Anak',
    rating: 4.8,
    // Tambahkan informasi relevan lainnya
  };

  // Function to handle the booking process
  const handleBooking = () => {
    navigation.navigate('Chatting');
    // Implement your booking logic here
    // You may want to navigate to a confirmation page or show a success message
    // For simplicity, this example just logs a message to the console
  };

  return (
    <View style={styles.container}>
      <Header title={'Doctor Profile'} onPress={() => navigation.goBack()} />
      <View style={styles.profile}>
        <View style={styles.borderava}>
          <Image source={DummyDoctor21} style={styles.avatar} />
          <IconFemale style={styles.removephoto} />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{doctorInfo.name}</Text>
        <Text style={styles.profession}>{doctorInfo.profession}</Text>
        <Text style={styles.rating}>Rating: {doctorInfo.rating}</Text>
        <Gap height={10} />
      </View>
      <ProfileItem label={'Alumnus'} value={'Universitas Bengkulu'} />
      <ProfileItem label={'Tempat Praktik'} value={'Rumah Sakit Umum Batam'} />
      <ProfileItem label={'No. STR'} value={'000123004558993'} />
      <View style={styles.action}>
        <Button title={'Start Consultation'} onPress={handleBooking} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  removephoto: {position: 'absolute', bottom: 2, right: 2},
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  rating: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.inactive,
  },
  action: {paddingHorizontal: 40, paddingTop: 30},
});

export default DoctorBooking;
