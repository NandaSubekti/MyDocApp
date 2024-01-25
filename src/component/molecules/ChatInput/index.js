import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import {Button} from '../../atoms';
import {fonts} from '../../../utils/fonts';

export default function ChatInput() {
  return (
    <View style={styles.continer}>
      <View style={styles.wrapper}>
        <TextInput style={styles.input} placeholder="Ketik pesan" />
        <Button type={'sendbutton'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    padding: 17,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundPage,
    borderRadius: 15,
    paddingRight: 10,
  },
  input: {
    backgroundColor: colors.backgroundPage,
    padding: 14,
    borderRadius: 15,
    flex: 1,
    fontFamily: fonts.primary.normal,
    fontSize: 15,
    maxHeight: 45,
  },
});
