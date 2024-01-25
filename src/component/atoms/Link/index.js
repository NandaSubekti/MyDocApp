import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

export default function Link({title, size, align, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontFamily: fonts.primary.normal,
    fontSize: size,
    color: colors.text.tertiary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
