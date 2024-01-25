import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

export default function SmallButton({onPress, title, smallb}) {
  const ButtonSmall = () => {
    if (smallb === 'back-dark') {
      return (
        <TouchableOpacity style={styles.back1} onPress={onPress}>
          <Text style={styles.text1}>start meeting</Text>
        </TouchableOpacity>
      );
    }
    if (smallb === 'back-light') {
      return (
        <TouchableOpacity style={styles.back2} onPress={onPress}>
          <Text style={styles.text2}>start meeting</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.back1} onPress={onPress}>
        <Text style={styles.text1}>start meeting</Text>
      </TouchableOpacity>
    );
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonSmall />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  back1: {
    backgroundColor: colors.button.primary.background,
    borderRadius: 10,
    height: 30,
    width: 120,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  back2: {
    backgroundColor: colors.button.secondary.background,
    borderRadius: 10,
    height: 30,
    width: 120,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.button.primary.text,
  },
  text2: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.button.secondary.text,
  },
});

// return (
//   <TouchableOpacity onPress={onPress}>
//     <Text>{title}</Text>
//   </TouchableOpacity>
// );
