import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size={'large'} color={colors.primary} />
      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.loadingBackground,
    width: '100%',
    height: '100%',
  },
  loading: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.border,
  },
});
