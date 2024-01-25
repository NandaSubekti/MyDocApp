import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import IconOnly from './IconOnly';
import SmallButton from './SmallButton';
import SendButton from './SendButton';
import InfoButton from './InfoButton';

export default function Button({type, title, onPress, icon, smallb, disable}) {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (type == 'smallbutton') {
    return <SmallButton smallb={smallb} onPress={onPress} />;
  }
  if (type == 'sendbutton') {
    return <SendButton disable={disable} />;
  }
  if (type == 'infobutton') {
    return <InfoButton onPress={onPress} title={title} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.continer(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  continer: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  disableBg: {
    backgroundColor: colors.button.disable.background,
    paddingVertical: 10,
    borderRadius: 10,
  },
  disableText: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    textAlign: 'center',
    color: colors.button.disable.text,
  },
  text: type => ({
    fontSize: 18,
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontFamily: fonts.primary[600],
  }),
});
