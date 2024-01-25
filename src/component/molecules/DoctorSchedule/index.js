import {Image, StyleSheet, Text, View, VirtualizedList} from 'react-native';
import React from 'react';
import {
  DummyDoctor12,
  DummyDoctor2,
  DummyDoctor7,
  DummyDoctor9,
} from '../../../asset';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import {Button, Gap} from '../../atoms';

export default function DoctorSchedule({
  name,
  spesialis,
  tanggal,
  waktu,
  media,
}) {
  const Schedule = () => {
    if (name === 'Lina Yeager') {
      return <Image source={DummyDoctor12} style={styles.avatar} />;
    }
    if (name === 'Chie Lian Lee') {
      return <Image source={DummyDoctor9} style={styles.avatar} />;
    }
    if (name === 'Mincika Itadori') {
      return <Image source={DummyDoctor7} style={styles.avatar} />;
    }
    return <Image source={DummyDoctor2} style={styles.avatar} />;
  };

  const Btn = () => {
    if (name === 'Lina Yeager') {
      return <Button type={'smallbutton'} smallb={'back-dark'} />;
    }
    if (name === 'Chie Lian Lee') {
      return <Button type={'smallbutton'} smallb={'back-light'} />;
    }
    if (name === 'Mincika Itadori') {
      return <Button type={'smallbutton'} smallb={'back-light'} />;
    }
    return <Button type={'smallbutton'} smallb={'back-dark'} />;
  };
  return (
    <View>
      <View style={styles.continer}>
        <Text style={styles.title}>Jadwal Konsultasi</Text>
        <View style={styles.backgroundBox}>
          <View style={styles.wrapper}>
            <Schedule />
          </View>
          <View style={styles.Decs}>
            <View style={styles.wrapperDecs}>
              <Text>Nama</Text>
              <Text>Spesialis</Text>
              <Text>Tanggal</Text>
              <Text>Waktu</Text>
              <Text>Media</Text>
            </View>
            <Gap width={10} />
            <View>
              <Text>: {name}</Text>
              <Text>: {spesialis}</Text>
              <Text>: {tanggal}</Text>
              <Text>: {waktu}</Text>
              <Text>: {media}</Text>
            </View>
          </View>
        </View>
        <Btn />
      </View>
      <Gap height={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: colors.backgroundPage2,
    maxWidth: '100%',
    height: 208,
    borderRadius: 10,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 20,
    color: colors.text.primary,
    textAlign: 'center',
  },
  Decs: {
    flexDirection: 'row',
    paddingHorizontal: 17,
    backgroundColor: colors.background,
    width: 230,
    height: 116,
    borderRadius: 10,
    alignItems: 'center',
  },
  backgroundBox: {
    paddingHorizontal: 17,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: 80,
    height: 118,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {width: 62, height: 62, borderRadius: 62 / 2},
});
