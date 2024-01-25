import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {DoctorSchedule, Gap} from '../../component';
import {JSONSchedule} from '../../asset';

export default function Doctor() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.wrappertitle}>
          <Text style={styles.halo}>Halo Nanda,</Text>
          <Text style={styles.title}>Schedule With A Doctor</Text>
        </View>
        <View style={styles.wrapperSchedule}>
          {JSONSchedule.data.map(item => {
            return (
              <DoctorSchedule
                key={item.name}
                name={item.name}
                spesialis={item.spesialis}
                tanggal={item.tangal}
                waktu={item.waktu}
                media={item.media}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrappertitle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 15,
    paddingTop: 30,
    paddingHorizontal: 17,
  },
  wrapperSchedule: {paddingTop: 17, paddingHorizontal: 10},
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 23,
    color: colors.text.primary,
  },
  halo: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
  },
});
