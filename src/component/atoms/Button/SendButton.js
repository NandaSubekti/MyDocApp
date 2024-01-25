import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconSendDark, IconSendLight} from '../../../asset';

export default function SendButton({disable}) {
  return (
    <TouchableOpacity>
      {disable && <IconSendDark />}
      {!disable && <IconSendLight />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
