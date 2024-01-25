import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

export default function ProfileItem({label, value}) {
  return (
    <View style={styles.continer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
  },
  value: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
    marginBottom: 8,
  },
});
