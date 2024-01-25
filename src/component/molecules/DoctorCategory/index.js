import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  ILCatAnak,
  ILCatBedah,
  ILCatKandungan,
  ILCatTHT,
  ILCatApoteker,
  DummyDoctor1,
} from '../../../asset';
import {colors} from '../../../utils/colors';
import {Gap} from '../../atoms';
import {fonts} from '../../../utils/fonts';

export default function DoctorCategory({category, onPress}) {
  const Icon = () => {
    if (category === 'Dokter Anak') {
      return <ILCatAnak width={55} height={55} />;
    }
    if (category === 'Dokter THT') {
      return <ILCatTHT width={55} height={55} />;
    }
    if (category === 'Dokter Bedah') {
      return <ILCatBedah width={55} height={55} />;
    }
    if (category === 'Apoteker') {
      return <ILCatApoteker width={55} height={55} />;
    }
    if (category === 'Kandungan') {
      return <ILCatKandungan width={55} height={55} />;
    }
    return <ILCatKandungan width={55} height={55} />;
  };
  return (
    <TouchableOpacity style={styles.continer} onPress={onPress}>
      <Icon />
      <Gap height={30} />
      <Text style={styles.text}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  continer: {
    padding: 7,
    backgroundColor: colors.background,
    alignSelf: 'flex-start',
    marginRight: 7,
    borderRadius: 10,
    width: 102,
    height: 133,
  },
  text: {fontFamily: fonts.primary[300], fontSize: 10},
  category: {fontFamily: fonts.primary[600], fontSize: 12, width: 90},
});
