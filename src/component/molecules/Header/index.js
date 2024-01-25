import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack} from '../../../asset';
import {Button, Gap} from '../../atoms';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

export default function Header({onPress, title}) {
  return (
    <View style={styles.continer}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    paddingHorizontal: 17,
    paddingVertical: 32,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 26,
    color: colors.text.primary,
    paddingTop: 20,
  },
});
