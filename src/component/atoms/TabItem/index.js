import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconChat,
  IconChatActive,
  IconDoctor,
  IconDoctorActive,
  IconHome,
  IconHomeActive,
  IconHospitals,
  IconHospitalsActive,
  IconProfile,
  IconProfileActive,
} from '../../../asset';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalsActive /> : <IconHospitals />;
    }
    if (title === 'Chat') {
      return active ? <IconChatActive /> : <IconChat />;
    }
    if (title === 'Account') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      style={styles.continer}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  continer: {alignItems: 'center'},
  text: active => ({
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: active ? colors.text.active : colors.text.inactive,
  }),
});
