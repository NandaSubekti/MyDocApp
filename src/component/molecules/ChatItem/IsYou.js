import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

export default function IsYou() {
  return (
    <View style={styles.continer}>
      <View style={styles.bublechat}>
        <Text style={styles.text}>
          Halo Dog, saya mau minta wejangan nih saya udah lama banget nganggur!
        </Text>
      </View>
      <Text style={styles.date}>4.20 PM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {marginBottom: 20, alignItems: 'flex-start', paddingLeft: 17},
  bublechat: {
    backgroundColor: colors.chatyou,
    padding: 12,
    paddingRight: 18,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    maxWidth: '70%',
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 15,
    color: colors.text.primary,
  },
  date: {
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 5,
  },
});
