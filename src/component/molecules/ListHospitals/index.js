import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DummyHospitals1,
  DummyHospitals2,
  DummyHospitals3,
  DummyUser,
  IconHalfStar,
  IconStar,
  JSONHospitals,
  JSONReviewer,
} from '../../../asset';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';
import {Gap} from '../../atoms';
import Star from '../Star';
import ReviewerPhotos from '../ReviewPhotos';

export default function ListHospitals({
  name,
  decs,
  distance,
  star,
  rating,
  ava,
  onPress,
}) {
  const Hospitals = () => {
    if (name === 'Rumah Sakit Pelita Harapan') {
      return <Image source={DummyHospitals1} style={styles.hospital} />;
    }
    if (name === 'Rumah Sakit Bloueheart Medicine') {
      return <Image source={DummyHospitals2} style={styles.hospital} />;
    }
    if (name === 'Rumah Sakit Karya Cempaka') {
      return <Image source={DummyHospitals3} style={styles.hospital} />;
    }
    return <Image source={DummyHospitals1} style={styles.hospital} />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Hospitals />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.decs}>{decs}</Text>
        <Text style={styles.distance}>{distance}</Text>
        <View>
          <Star star={star} />
        </View>
        <View style={styles.wrapperAva}>
          {JSONReviewer.data
            .filter(reviewer => reviewer.hospital === name)
            .map((reviewer, index) => (
              <ReviewerPhotos key={index} photos={reviewer.photos} />
            ))}
          {/* <Image source={DummyUser} style={styles.avatar} />
          <Image source={DummyUser} style={styles.avatar} />
          <Image source={DummyUser} style={styles.avatar} /> */}
          <Gap width={7} />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', paddingBottom: 30},
  wrapper: {marginLeft: 17, justifyContent: 'space-between'},
  hospital: {height: 224, width: 122, borderRadius: 20, marginLeft: 17},
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 15,
    color: colors.text.primary,
    paddingTop: 10,
    maxWidth: '75%',
  },
  distance: {
    fontFamily: fonts.primary[700],
    fontSize: 12,
    color: colors.text.primary,
  },
  decs: {
    fontFamily: fonts.primary[400],
    fontSize: 15,
    color: colors.text.secondary,
    paddingTop: 10,
    maxWidth: '80%',
  },
  avatar: {width: 30, height: 30, borderRadius: 30 / 2},
  star: {flexDirection: 'row'},
  wrapperAva: {flexDirection: 'row', paddingBottom: 10, alignItems: 'center'},
  rating: {
    fontFamily: fonts.primary[700],
    fontSize: 11,
    color: colors.text.primary,
  },
});
