import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

export default function InfoButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text1}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.chatyou,
    borderRadius: 10,
    height: 30,
    width: 284,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text1: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
