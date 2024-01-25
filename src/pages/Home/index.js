import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {JSONNews, JSONRatedDoctor} from '../../asset';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../component';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

export default function Home({navigation, doctorId}) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeProfile onPress={() => navigation.navigate('Account')} />
          <View style={styles.wrapperSection}>
            <Text style={styles.name}>Halo Nanda,</Text>
            <Text style={styles.welcome}>Mau Konsultasi Apa Hari Ini?</Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal>
              <View style={styles.category}>
                <Gap width={32} />
                <DoctorCategory
                  category={'Dokter Anak'}
                  onPress={() => navigation.navigate('ListDoctorAnak')}
                />
                <DoctorCategory
                  category={'Dokter THT'}
                  onPress={() => navigation.navigate('ListDoctorTHT')}
                />
                <DoctorCategory
                  category={'Dokter Bedah'}
                  onPress={() => navigation.navigate('ListDoctorBedah')}
                />
                <DoctorCategory
                  category={'Apoteker'}
                  onPress={() => navigation.navigate('Apoteker')}
                />
                <DoctorCategory
                  category={'Kandungan'}
                  onPress={() => navigation.navigate('ListDoctorKandungan')}
                />
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Rated Doctor</Text>
            {JSONRatedDoctor.data.map(item => {
              return (
                <RatedDoctor
                  key={item.id}
                  doctorId={item.id}
                  name={item.name}
                  profession={item.profession}
                  onPress={() =>
                    navigation.navigate('DoctorBooking', {doctorId})
                  }
                />
              );
            })}
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {JSONNews.data.map(item => {
            return (
              <NewsItem key={item.id} title={item.title} date={item.date} />
            );
          })}
          <Gap height={20} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    backgroundColor: colors.backgroundPage,
    flex: 1,
  },
  name: {
    paddingTop: 30,
    fontFamily: fonts.primary[600],
    fontSize: 22,
    color: colors.text.primary,
  },
  welcome: {
    fontFamily: fonts.primary[600],
    fontSize: 22,
    color: colors.text.primary,
    paddingBottom: 30,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  wrapperSection: {paddingHorizontal: 17},
});

// {
//   JSONCategoryDoctor.data.map(item => {
//     return (
//       <DoctorCategory
//         key={item.id}
//         category={item.category}
//         onPress={() => navigation.navigate('ListDoctor')}
//       />
//     );
//   });
// }
