import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IconStar, IconHalfStar} from '../../../asset';

export default function Star({star}) {
  const Stared = () => {
    if (star === 5) {
      return (
        <View style={styles.star}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </View>
      );
    }
    if (star === 4) {
      return (
        <View style={styles.star}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </View>
      );
    }
    if (star === 3) {
      return (
        <View style={styles.star}>
          <IconStar />
          <IconStar />
          <IconStar />
        </View>
      );
    }
    if (star === 2) {
      return (
        <View style={styles.star}>
          <IconStar />
          <IconStar />
        </View>
      );
    }
    if (star === 1) {
      return (
        <View style={styles.star}>
          <IconStar />
        </View>
      );
    }
    if (star === 0) {
      return <View style={styles.star} />;
    }
    if (star >= 4.1 && star <= 4.9) {
      return (
        <View style={styles.star}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconHalfStar />
        </View>
      );
    }
    if (star >= 3.1 && star <= 3.9) {
      return (
        <View style={styles.star}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconHalfStar />
        </View>
      );
    }
    if (star >= 2.1 && star <= 2.9) {
      return (
        <View style={styles.star}>
          <IconStar />
          <IconStar />
          <IconHalfStar />
        </View>
      );
    }
    if (star >= 1.1 && star <= 1.9) {
      return (
        <View style={styles.star}>
          <IconStar />
          <IconHalfStar />
        </View>
      );
    }
    if (star >= 0.1 && star <= 0.9) {
      return (
        <View style={styles.star}>
          <IconHalfStar />
        </View>
      );
    }
    // Handle other cases if needed
    return null;
  };

  return (
    <View style={styles.star}>
      <Stared />
    </View>
  );
}

const styles = StyleSheet.create({
  star: {flexDirection: 'row'},
});
