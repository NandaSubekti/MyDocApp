import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  DummyUser,
  DummyUser1,
  DummyUser10,
  DummyUser2,
  DummyUser3,
  DummyUser4,
  DummyUser5,
  DummyUser6,
  DummyUser7,
  DummyUser8,
  DummyUser9,
} from '../../../asset';
import {colors} from '../../../utils/colors';

export const Images = [
  DummyUser,
  DummyUser1,
  DummyUser2,
  DummyUser3,
  DummyUser4,
  DummyUser5,
  DummyUser6,
  DummyUser7,
  DummyUser8,
  DummyUser9,
  DummyUser10,
];

export default function ReviewerPhotos({photos}) {
  // Shuffle the array to get a random order
  const shuffledPhotos = photos.sort(() => Math.random() - 0.5);

  // Take the first three elements (randomly selected)
  const selectedPhotos = shuffledPhotos.slice(0, 3);

  return (
    <View style={styles.photosContainer}>
      {selectedPhotos.map((photo, index) => (
        <Image key={index} source={Images[index]} style={styles.avatar} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  photosContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
});
