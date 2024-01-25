import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {Gap, ListHospitals} from '../../component';
import {JSONHospitals} from '../../asset';

export default function Hospitals({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.wrappertitle}>
        <Text style={styles.halo}>Halo Nanda,</Text>
        <Text style={styles.title}>Nearby Hospitals</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Gap height={17} />
          {JSONHospitals.data.map(item => {
            return (
              <ListHospitals
                key={item.name}
                name={item.name}
                decs={item.decs}
                distance={item.distance}
                star={item.star}
                rating={item.rating}
                // onPress={() => navigation.navigate('Account')}
              />
            );
            <Gap height={30} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.backgroundPage, flex: 1},
  wrappertitle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 15,
    paddingTop: 30,
    paddingHorizontal: 17,
  },
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
