import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconBack} from '../../../asset';

export default function IconOnly({onPress, icon}) {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBack />;
    }
    if (icon === 'back-light') {
      return <IconBack />;
    }
    return <IconBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
